import {Injectable} from '@angular/core';
import {ApiServiceProvider} from "../api-service/api-service";
import {Storage} from '@ionic/storage';
import {AuthTokenDto} from "./authToken.dto";
import {LoadingController} from "ionic-angular";

@Injectable()
export class AuthServiceProvider {

  constructor(private api: ApiServiceProvider, private storage: Storage,
              public loadingCtrl: LoadingController) {
  }

  public getUserToken<T>(): Promise<T> {
    return new Promise((resolve, reject) => {
      this.storage.get('access_token').then(data => {
        resolve(data);
      }).catch(error => {
        reject(null);
      });
    });
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

  public refreshUserToken<T>(username: string, password: string): Promise<T> {
    if (username && password) {

      return this.api.post(this.api.getApiUrl() + 'oauth/token', null, {
        'grant_type': 'password',
        'client_id': '1',
        'client_secret': 'Rp52CEoYWjiIA0kRTTGspdbjee3tQxSaNCVn7J87',
        'username': username,
        'password': password
      });
    } else {

      return new Promise((resolve, reject) => {
        reject('L\'email ou le mot de passe ne peuvent être vides');
      })
    }
  }

  public logout<T>(): Promise<T> {
    return new Promise((resolve, reject) => {
      this.storage.remove('access_token').then(data => {
        resolve(data);
      }).catch(data => {
        reject(data);
      });
    });
  }


}
