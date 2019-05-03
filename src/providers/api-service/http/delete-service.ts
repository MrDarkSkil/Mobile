import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlertProvider} from "../../alert/alert-service";

@Injectable()
export class DeleteService {

  constructor(private http: HttpClient, private alertProvider: AlertProvider) {
  }

  public submit<T>(url: string, token?: string, body?: object): Promise<T> {

    console.log('delete => ', url);

    return this.http.delete<T>(url,
      {
        headers: token ?
          {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
          } : {
            'Accept': 'application/json'
          }
      }).toPromise().then(data => {
      console.log('delete data => ', JSON.stringify(data));
      return data;
    }).catch(err => {
      console.log('delete error => ', JSON.stringify(err));

      this.alertProvider.errorAlert(err);
      throw err;
    });
  }

}
