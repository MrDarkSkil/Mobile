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

}
