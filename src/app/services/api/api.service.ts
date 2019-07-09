import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';

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

  private readonly apiUrl: string = 'https://dev.elios-mirror.com';

  constructor(private httpClient: HttpClient, private storage: Storage) {
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
            console.log('error');
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
