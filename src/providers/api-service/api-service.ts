import { Injectable } from '@angular/core';
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";

@Injectable()
export class ApiServiceProvider {

  private apiUrl = '/api';

  constructor(private getService: GetService, private postService: PostService) {
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
