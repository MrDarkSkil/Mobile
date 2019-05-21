import {Injectable} from '@angular/core';
import {App, Platform} from "ionic-angular";
import {HttpClient} from '@angular/common/http';
import {Storage} from "@ionic/storage";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";

enum HttpMethods {
  GET,
  POST,
  DELETE,
  PUT
}

@Injectable()
export class ApiServiceProvider {

  private readonly apiUrl: string = '/api';

  constructor(private platform: Platform, private httpClient: HttpClient, private storage: Storage,
              private splashScreen: SplashScreen, private app: App) {

    if (this.platform.is('cordova') == true) {
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
            if (err && err.status && err.status === 401 && this.app.getRootNav().root.name != 'LoginPage') {
              console.log(token);
              this.storage.remove('access_token').then(() => {
                console.log('Error 401: app reload');
                this.splashScreen.show();
                location.reload();
              });
            }
            reject(err);
          });
      });
    });
  }

  get<T>(url: string, token?: string): Promise<T> {
    return this.request<T>(HttpMethods.GET, url);
  }

  post<T>(url: string, token?: string, data?: {}): Promise<T> {
    return this.request<T>(HttpMethods.POST, url, data);
  }

  delete<T>(url: string, token?: string): Promise<T> {
    return this.request<T>(HttpMethods.DELETE, url);
  }

  put<T>(url: string, token?: string, data?: {}): Promise<T> {
    return this.request<T>(HttpMethods.PUT, url, data);
  }

  public getApiUrl() {
    return (this.apiUrl);
  }
}
