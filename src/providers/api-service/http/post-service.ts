import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  public submit<T>(url: string, token?: string, body?: object): Promise<T> {

    console.log('post => ', url);

    return this.http.post<T>(url, body,
      {
        headers: token ?
          {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
          } : {
            'Accept': 'application/json'
          }
      }).toPromise().then(data => {
        console.log('post data => ', JSON.stringify(data));
        return data;
      }).catch(err => {
        console.log('post error => ', JSON.stringify(err));
        throw err;
      });
  }

}
