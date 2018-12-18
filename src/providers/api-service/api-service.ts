import { Injectable } from '@angular/core';
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";
import {Platform} from "ionic-angular";
import {PutService} from "./http/put-service";

@Injectable()
export class ApiServiceProvider {

  private readonly apiUrl: string = '/api';

  constructor(private platform: Platform, private getService: GetService,
              private postService: PostService, private putService: PutService) {

    if (this.platform.is('cordova') == true) {
      this.apiUrl = 'http://dev.elios-mirror.com';
    }
  }

  public getApiUrl() {
    return (this.apiUrl);
  }

  public get<T>(url: string, token?: string): Promise<T> {
    return (this.getService.submit<T>(url, token));
  }

  public post<T>(url: string, token?: string, body?: object): Promise<T> {
    return (this.postService.submit<T>(url, token, body));
  }

  public put<T>(url: string, token?: string, body?: object): Promise<T> {
    return (this.putService.submit<T>(url, token, body));
  }
}
