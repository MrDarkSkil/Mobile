import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AlertProvider} from "../../alert/alert-service";

@Injectable()
export class GetService {

  constructor(private http: HttpClient, private alertProvider: AlertProvider) {
  }

  public submit<T>(url: string, token?: string): Promise<T> {

    console.log('get ====>   ', url);

    return this.http.get<T>(url, {
      headers: token ?
        {
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json'
        } : { 'Accept': 'application/json' }
    }).toPromise().then(data => {
      console.log('get data => ', JSON.stringify(data));
      return data;
    }).catch(err => {
      console.log('get error => ', JSON.stringify(err));

      this.alertProvider.errorAlert(err);
      throw err;
    });
  }

}
