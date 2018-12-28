import { Injectable } from '@angular/core';
import {ApiServiceProvider} from "../api-service/api-service";

@Injectable()
export class ModuleProvider {

  constructor(private api: ApiServiceProvider) {
    //
  }

  public getModules(token: any) {
    return this.api.get(this.api.getApiUrl() + '/api/modules', token);
  }

  public getModuleById(id: string, token: any) {
    return this.api.get(this.api.getApiUrl() + '/api/modules/' + id, token);
  }


}
