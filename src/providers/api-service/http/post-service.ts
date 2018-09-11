import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  public submit<T>(url: string, token?: string, body?: object): Promise<T> {

    return new Promise((resolve, reject) => {
      this.http.post<T>(url, body,
        {
          headers: token ?
            {
              'Authorization': 'Bearer ' + token
            } : {}
        }).subscribe(
        data => {
          resolve(data);
        },
        result => {
          console.log(result);
          reject(JSON.stringify(result));
        });
    })
  }

}
