import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import {UserDto} from './user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  public getUserInfos() {
    return this.api.get<UserDto>(this.api.getApiUrl() + '/api/user');
  }
}
