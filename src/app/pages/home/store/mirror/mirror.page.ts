import {Component, OnInit} from '@angular/core';
import {ModuleDto} from '../../../../services/mirror/mirror.dto';
import {ActivatedRoute, NavigationExtras} from '@angular/router';
import {MirrorService} from '../../../../services/mirror/mirror.service';
import {NavController, PopoverController} from '@ionic/angular';
import {MirrorPopoverComponent} from './mirror-popover/mirror-popover.component';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.page.html',
  styleUrls: ['./mirror.page.scss'],
})
export class MirrorPage implements OnInit {

  public mirror: any = null;
  public applications: Array<ModuleDto> = [];
  public loader = true;

  constructor(private route: ActivatedRoute, private mirrorService: MirrorService,
              private popoverCtrl: PopoverController, private navCtrl: NavController, private storage: Storage) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.storage.get('currentMirror').then(mirror => {
      this.mirror = mirror;
      this.refreshMirrorInfos();
    });
  }

  refreshMirrorInfos() {
    this.loader = true;
    this.mirrorService.getMirror(this.mirror.id).then(result => {
      this.storage.set('currentMirror', result).then(() => {
        this.mirror = result;
        this.applications = result.modules;
        this.loader = false;
        console.log(this.applications);
      });
    });
  }

  public async mirrorSettings(ev: UIEvent) {
    const popover = await this.popoverCtrl.create({
      component: MirrorPopoverComponent,
      event: ev,
      translucent: true
    });

    return await popover.present();
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
