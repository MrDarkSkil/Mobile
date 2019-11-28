import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {ApplicationsDto} from './applications.dto';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private api: ApiService) { }

  public getModules() {
    return this.api.get<ApplicationsDto>(this.api.getApiUrl() + '/api/store');
  }

  public getModuleById(id: string) {
    return this.api.get(this.api.getApiUrl() + '/api/modules/' + id);
  }

  public getModulesBySearch(search: string) {
    return this.api.get(this.api.getApiUrl() + '/api/store/search?q=' + search);
  }
}
