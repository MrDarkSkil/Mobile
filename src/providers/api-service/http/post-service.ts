import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  public submit<T>(url: string, token?: string, body?: object): Promise<T> {

    return new Promise((resolve, reject) => {
      this.http.post<T>(url, body).subscribe(
        data => {
          resolve(data);
        },
        error => {
          if (error.status = 401) {
            reject('401 Unauthorized');
          } else {
            reject(error);
          }
        });
    })
  }

}
