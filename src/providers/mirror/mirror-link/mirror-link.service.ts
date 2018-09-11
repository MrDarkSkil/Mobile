import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiServiceProvider} from "../../api-service/api-service";
import {AuthServiceProvider} from "../../auth/auth-service";

@Injectable()
export class MirrorLinkProvider {

  private token;

  constructor(public http: HttpClient, private api: ApiServiceProvider, private auth: AuthServiceProvider) {
    this.auth.getUserToken().then(result => {
      this.token = result;
    });
  }

  public mirrorLink(mirrorId: string) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/link', this.token, null);
  }
}
