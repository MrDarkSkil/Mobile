import { Injectable } from '@angular/core';
import {ApiServiceProvider} from "../../api-service/api-service";

@Injectable()
export class MirrorUnlinkProvider {

  constructor(private api: ApiServiceProvider) {
  }

  unlinkMirror(id: string, token: any) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + id + '/unlink', token);
  }

}
