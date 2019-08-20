import {Component, OnInit} from '@angular/core';
import {MirrorService} from '../../../../../services/mirror/mirror.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.page.html',
  styleUrls: ['./app-details.page.scss'],
})
export class AppDetailsPage implements OnInit {

  public application: any;
  public mirror: any;
  public loader = true;
  public isModuleInstalled = false;
  public uninstall = false;
  public buttonText = 'Installer';

  constructor(private mirrorService: MirrorService, private route: ActivatedRoute, private location: Location) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.mirror) {
        this.mirror = JSON.parse(params['mirror']);
        this.application = JSON.parse(params['application']);
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.checkModule();
  }

  myBackButton(){
    this.location.back();
  }

  private checkModule() {
    this.mirrorService.isModuleInstalled(this.mirror.id, this.application.id).then(() => {
      this.isModuleInstalled = true;
      this.loader = false;
      this.uninstall = true;
      this.buttonText = 'Supprimer';
    }).catch(() => {
      this.isModuleInstalled = false;
      this.loader = false;
      this.buttonText = 'Installer';
      this.uninstall = false;
    });
  }

  public uninstallApp() {
    this.loader = true;

    this.mirrorService.uninstallModule(this.mirror.id, this.application.id).then(() => {
      this.checkModule();
    }).catch((err) => {
      console.log('uninstall error', err);
      this.loader = false;
    });
  }

  public install() {
    this.loader = true;

    this.mirrorService.installModule(this.mirror.id, this.application.id).then(() => {
      this.checkModule();
    }).catch((err) => {
      console.log('install error', err);
      this.loader = false;
    });
  }

  public isArray(variable: any) {
    return Array.isArray(variable);
  }

}
