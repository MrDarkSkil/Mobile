import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {ApplicationsService} from '../../../../services/applications/applications.service';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  isLoading = false;
  public applications = null;
  public searchResult: any = null;
  public result = true;

  constructor(public navCtrl: NavController, private appsService: ApplicationsService) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
  }

  public search(event) {
    if (event.target.value) {
      this.isLoading = true;
      this.applications = null;

      console.log('kek', event.target.value);

      this.appsService.getModulesBySearch(event.target.value).then(result => {
        this.searchResult = result;
        if (this.searchResult.data[0]) {
          this.result = true;
          this.applications = this.searchResult.data;
        } else {
          this.result = false;
        }
        this.isLoading = false;
      });
    }
  }

  public cancelButtonClicked() {
    this.applications = null;
    this.result = true;
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
