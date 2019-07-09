import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {AuthTokenDto} from './authToken.dto';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage, private api: ApiService) { }

  public getUserToken<T>(): Promise<T> {
    return this.storage.get('access_token');
  }

  public refreshUserToken<T>(username: string, password: string): Promise<T> {
    if (username && password) {

      return this.api.post(this.api.getApiUrl() + '/oauth/token', {
        'grant_type': 'password',
        'client_id': '1',
        'client_secret': 'Rp52CEoYWjiIA0kRTTGspdbjee3tQxSaNCVn7J87',
        'username': username,
        'password': password,
        'provider': 'users'
      });
    } else {

      return new Promise((resolve, reject) => {
        reject('L\'email ou le mot de passe ne peuvent être vides');
      });
    }
  }

  public login(username: string, password: string): Promise<AuthTokenDto> {

    return new Promise((resolve, reject) => {
      this.refreshUserToken<AuthTokenDto>(username, password)
        .then(data => {
          this.storage.set('access_token', data.access_token);
          resolve(data);
        })
        .catch(data => {
          reject(data);
        });
    });
  }
}
