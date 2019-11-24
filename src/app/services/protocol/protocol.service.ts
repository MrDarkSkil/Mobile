import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  constructor(private api: ApiService) { }

  public getModuleForm(moduleId: string) {
    return this.api.get(this.api.getApiUrl() + '/api/modules/' + moduleId + '/form');
  }
}
