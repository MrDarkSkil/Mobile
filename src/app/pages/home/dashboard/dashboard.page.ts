import {Component, OnInit} from '@angular/core';
import {MirrorDto} from '../../../services/mirror/mirror.dto';
import {AuthService} from '../../../services/auth/auth.service';
import {MirrorService} from '../../../services/mirror/mirror.service';
import {LoadingController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public mirrors: MirrorDto[] = null;
  public loader = true;

  constructor(private auth: AuthService, private mirrorService: MirrorService, private loadingCtrl: LoadingController,
              private router: Router) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refresh().then(() => {
      this.loader = false;
    });
  }

  public doRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }

  private refresh() {

    return new Promise((resolve, reject) => {
      this.mirrorService.getMirrors().then(mirrors => {
        this.mirrors = mirrors;
        resolve('ok');
      })
        .catch(error => {
          reject(error);
        });
    });
  }

  public async deleteMirror(mirror: any, id: string) {
    mirror.close();
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...'
    });

    loading.present();
    this.mirrorService.unlinkMirror(id).then(result => {
      console.log('done');
      this.refresh().then(() => {
        loading.dismiss();
      });
    });
  }

  public navigateMirrorStore(mirror) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(mirror)
      }
    };
    this.router.navigate(['/store/mirror'], navigationExtras);
  }

}
