import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {MirrorDto} from './mirror.dto';

@Injectable({
  providedIn: 'root'
})
export class MirrorService {

  constructor(private api: ApiService) {
  }

  public getMirrors() {
    return this.api.get<MirrorDto[]>(this.api.getApiUrl() + '/api/mirrors');
  }

  public getMirror(mirrorID: string) {
    return this.api.get<MirrorDto>(this.api.getApiUrl() + '/api/mirrors/' + mirrorID);
  }

  public mirrorLink(mirrorId: string) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/link');
  }

  public unlinkMirror(id: string) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + id + '/unlink');
  }

  public installModule(mirrorId: string, moduleId: string) {
    return this.api.post(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/' + moduleId, null);
  }

  public uninstallModule(mirrorId: string, moduleId: string) {
    return this.api.delete(this.api.getApiUrl() + '/api/mirrors/' + mirrorId + '/' + moduleId);
  }

  public changeName(id: string, name: string) {
    return this.api.put(this.api.getApiUrl() + '/api/mirrors/' + id, {
      'name': name
    });
  }

  public isModuleInstalled(mirrorID: string, moduleID: string) {

    return new Promise((resolve, reject) => {
      this.getMirror(mirrorID).then(result => {
        for (let module of result.modules) {
          if (module.module.id === moduleID) {
            resolve('ok');
          }
        }
        reject('not found');
      })
        .catch(error => {
          reject(error);
        });
    });
  }
}
