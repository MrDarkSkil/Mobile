import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, PopoverController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-mirror-popover',
  templateUrl: './mirror-popover.component.html',
  styleUrls: ['./mirror-popover.component.scss'],
})
export class MirrorPopoverComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController, private navParams: NavParams,
              private storage: Storage) {
  }

  ngOnInit() {
  }

  public switch() {
    this.storage.remove('currentMirror').then(() => {
      this.popoverCtrl.dismiss({
        dismissed: true
      }).then(() => {
        this.navCtrl.navigateBack(['/home/dashboard']);
      });
    });
  }

  public settings() {
    this.popoverCtrl.dismiss({
      dismissed: true
    });

    const mirror = this.navParams.data.mirror;
    console.log(mirror);

    this.navCtrl.navigateForward(['/store/mirror/settings']);
  }

}
