import { Component, OnInit } from '@angular/core';
import {ApplicationsService} from '../../../../services/applications/applications.service';
import {ActivatedRoute, NavigationExtras} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  public loader = true;
  public applications = {};
  public mirror: any = null;

  constructor(private appsService: ApplicationsService, private route: ActivatedRoute, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.mirror = JSON.parse(params.special);
        console.log(this.mirror);
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.refresh().then(() => {
      this.loader = false;
    });
  }

  doRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }

  refresh() {
    return new Promise((resolve, reject) => {
        this.appsService.getModules().then(result => {
          this.applications = result;
          console.log(result);
          resolve('ok');
        });
    });
  }

  public navigateAppDetails(application) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        application: JSON.stringify(application)
      }
    };
    this.navCtrl.navigateForward(['/store/app-details'], navigationExtras);
  }

}
