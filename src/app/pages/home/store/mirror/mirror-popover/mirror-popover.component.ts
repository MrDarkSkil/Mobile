import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, PopoverController} from '@ionic/angular';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-mirror-popover',
  templateUrl: './mirror-popover.component.html',
  styleUrls: ['./mirror-popover.component.scss'],
})
export class MirrorPopoverComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
  }

  public switch() {
    this.popoverCtrl.dismiss({
      dismissed: true
    });

    this.navCtrl.navigateBack(['/home/dashboard']);
  }

  public settings() {
    this.popoverCtrl.dismiss({
      dismissed: true
    });

    const mirror = this.navParams.data.mirror;
    console.log(mirror);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        mirror: JSON.stringify(mirror)
      }
    };

    this.navCtrl.navigateForward(['/store/mirror/settings'], navigationExtras);
  }

}
