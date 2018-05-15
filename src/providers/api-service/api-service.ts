import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class ApiServiceProvider {

  constructor(private http: HTTP) {
    console.log('Hello ApiServiceProvider Provider');
  }

  public submit() {
    console.log('done');
  }

}
