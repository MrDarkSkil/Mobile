import { Injectable } from '@angular/core';
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";

@Injectable()
export class ApiServiceProvider {

  private apiUrl = 'http://dev.elios-mirror.com/';

  constructor(private get: GetService, private post: PostService) {
  }

  public getApiUrl() {
    return (this.apiUrl);
  }

  public getApiToken(username: string, password: string) {
    if (username && password) {
      return this.post.submit(this.apiUrl + 'oauth/token', null, {
        'grant_type': 'password',
        'client_id': '1',
        'client_secret': 'Rp52CEoYWjiIA0kRTTGspdbjee3tQxSaNCVn7J87',
        'username': username,
        'password': password
      });
    }
    else {
      return new Promise((resolve, reject) => {
        reject('L\'email ou le mot de passe ne peuvent être vides');
      })
    }
  }
}
