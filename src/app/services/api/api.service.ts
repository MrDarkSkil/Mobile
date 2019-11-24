import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {NavController, Platform} from '@ionic/angular';

enum HttpMethods {
  GET,
  POST,
  DELETE,
  PUT
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '/api';

  constructor(private httpClient: HttpClient, private storage: Storage, private navCtrl: NavController,
              private platform: Platform) {
    if (this.platform.is('cordova') === true) {
      this.apiUrl = 'https://dev.elios-mirror.com';
    }
  }

  private request<T>(method: HttpMethods, url: string, data: {} = {}): Promise<T> {

    return new Promise((resolve, reject) => {
      this.storage.get('access_token').then(token => {

        this.httpClient.request<T>(HttpMethods[method.toString()], url, {
          headers: token ?
            {
              'Authorization': 'Bearer ' + token,
              'Accept': 'application/json'
            } : {'Accept': 'application/json'},
          body: data
        }).toPromise().then(result => {
          resolve(result);
        })
          .catch((err) => {
            console.log(err);
            if (err && err.status && err.status === 401) {
              this.storage.remove('access_token');
              this.navCtrl.navigateRoot(['/login']);
            } else if (err && err.status && err.status === 400) {
              this.navCtrl.navigateRoot(['/error/400']);
            } else if (err && err.status && err.status === 504) {
              this.navCtrl.navigateRoot(['/error/504']);
            } else if (err && err.status && err.status === 500) {
              this.navCtrl.navigateRoot(['/error/500']);
            }
            reject(err);
          });
      });
    });
  }

  public get<T>(url: string): Promise<T> {
    return this.request<T>(HttpMethods.GET, url);
  }

  public post<T>(url: string, data?: {}): Promise<T> {
    return this.request<T>(HttpMethods.POST, url, data);
  }

  public delete<T>(url: string,): Promise<T> {
    return this.request<T>(HttpMethods.DELETE, url);
  }

  public put<T>(url: string, data?: {}): Promise<T> {
    return this.request<T>(HttpMethods.PUT, url, data);
  }

  public getApiUrl() {
    return (this.apiUrl);
  }
}
