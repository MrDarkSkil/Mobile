import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {AuthTokenDto} from './authToken.dto';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage, private api: ApiService) {
  }

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

  public register(email: string, password: string, name?: string): Promise<AuthTokenDto> {
    if (email && password && password.length >= 6) {

      return this.api.post(this.api.getApiUrl() + '/api/register', {
        'name': name ? name : 'default',
        'email': email,
        'password': password,
        'password_confirmation': password
      });
    } else if (!email || !password) {

      return new Promise((resolve, reject) => {
        reject('L\'email ou le mot de passe ne peuvent être vides');
      });
    } else if (password.length < 6) {

      return new Promise((resolve, reject) => {
        reject('Le mot de passe doit faire au moins 6 caractères');
      });
    }
  }

  public lostPassword(email: string): Promise<AuthTokenDto> {
    if (email) {

      return this.api.post(this.api.getApiUrl() + '/api/password/email', {
        'email': email,
      });
    } else {

      return new Promise((resolve, reject) => {
        reject('Le champ d\'email est vide, veuillez le remplir');
      });
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
