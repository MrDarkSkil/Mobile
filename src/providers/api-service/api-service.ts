import { Injectable } from '@angular/core';
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";
import {Platform} from "ionic-angular";
import {PutService} from "./http/put-service";
import { DeleteService } from './http/delete-service';

@Injectable()
export class ApiServiceProvider {

  private readonly apiUrl: string = '/api';

  constructor(private platform: Platform, private getService: GetService,
              private postService: PostService, private putService: PutService,
               private deleteService: DeleteService) {

    if (this.platform.is('cordova') == true) {
      this.apiUrl = 'https://dev.elios-mirror.com';       
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

  public delete<T>(url: string, token?: string): Promise<T> {
    return (this.deleteService.submit<T>(url, token));
  }
}
