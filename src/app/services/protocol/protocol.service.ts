import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  constructor(private api: ApiService) { }

  public getModuleForm(mirrorId: string, moduleId: string) {
    return this.api.get<Array<any>>(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/' + moduleId + '/form');
  }

  public sendModuleFormData(mirrorId: string, moduleId: string, data: JSON) {
    return this.api.put(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/' + moduleId + '/form', data);
  }
}
