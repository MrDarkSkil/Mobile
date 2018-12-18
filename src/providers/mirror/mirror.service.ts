import { Injectable } from '@angular/core';
import {ApiServiceProvider} from "../api-service/api-service";
import {MirrorDto} from "./mirror.dto";

@Injectable()
export class MirrorProvider {

  constructor(private api: ApiServiceProvider) {

  }

  public getMirrors(token) {
    return this.api.get<MirrorDto[]>(this.api.getApiUrl() + '/api/mirrors', token);
  }

  public mirrorLink(mirrorId: string, token: any) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/link', token, null);
  }

  public unlinkMirror(id: string, token: any) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + id + '/unlink', token);
  }

  public changeName(id: string, token: any, name: string) {
    return this.api.put(this.api.getApiUrl() + '/api/mirrors/' + id, token, {
      'name': name
    });
  }

}
