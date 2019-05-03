import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlertProvider} from "../../alert/alert-service";

@Injectable()
export class PutService {

  constructor(private http: HttpClient, private alertProvider: AlertProvider) {
  }

  public submit<T>(url: string, token?: string, body?: object): Promise<T> {

    console.log('post => ', url);

    return this.http.put<T>(url, body,
      {
        headers: token ?
          {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          } : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }).toPromise().then(data => {
      console.log('post data => ', JSON.stringify(data));
      return data;
    }).catch(err => {
      console.log('post error => ', JSON.stringify(err));

      this.alertProvider.errorAlert(err);

      throw err;
    });
  }

}
