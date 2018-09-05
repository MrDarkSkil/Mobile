import { Injectable } from '@angular/core';
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";
import {Platform} from "ionic-angular";

@Injectable()
export class ApiServiceProvider {

  private apiUrl = '/api';

  constructor(private platform: Platform, private getService: GetService, private postService: PostService) {
    if (this.platform.is('cordova') == true) {
      this.apiUrl = 'http://dev.elios-mirror.com/';
    }
  }

  public getApiUrl() {
    return (this.apiUrl);
  }

  public get<T>(url: string, token?: string, body?: object): Promise<T> {
    return (this.getService.submit(url, token));
  }

  public post<T>(url: string, token?: string, body?: object): Promise<T> {
    return (this.postService.submit(url, token, body));
  }
}
