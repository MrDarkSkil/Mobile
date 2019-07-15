import {Component, OnInit} from '@angular/core';
import {NavController, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-mirror-popover',
  templateUrl: './mirror-popover.component.html',
  styleUrls: ['./mirror-popover.component.scss'],
})
export class MirrorPopoverComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  public switch() {
    this.popoverCtrl.dismiss({
      dismissed: true
    });

    this.navCtrl.navigateBack(['/home/dashboard']);
  }

}
