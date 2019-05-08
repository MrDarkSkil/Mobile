import {Injectable} from '@angular/core';
import {GetService} from "./http/get-service";
import {PostService} from "./http/post-service";
import {Platform} from "ionic-angular";
import {PutService} from "./http/put-service";
import {DeleteService} from './http/delete-service';
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

  constructor(private platform: Platform, private getService: GetService,
              private postService: PostService, private putService: PutService,
              private deleteService: DeleteService, private httpClient: HttpClient, private storage: Storage,
              private splashScreen: SplashScreen) {

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
            if (err && err.status && err.status === 401) {
              console.log(token);
              this.storage.remove('access_token').then(() => {
                console.log('Error 401: app reload');
                this.splashScreen.show();
                location.reload();
              });
            }
            throw err;
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

  /*public get<T>(url: string, token?: string): Promise<T> {
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
  }*/
}
