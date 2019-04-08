import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ModuleProvider} from "../../../providers/module/module";
import {AuthServiceProvider} from "../../../providers/auth/auth-service";
import {ModuleDetailsPage} from "../module-details/module-details";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  isLoading: boolean = false;
  public modules = null;
  public mirror: any = null;
  public searchResult: any = null;
  public result: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private moduleProvider: ModuleProvider,
              private authProvider: AuthServiceProvider) {
    this.mirror = this.navParams.get('mirror');
  }

  ionViewDidLoad() {
  }

  public search(event) {
    if (event.target.value) {
      this.isLoading = true;
      this.modules = null;
      console.log('kek', event.target.value);

      this.authProvider.getUserToken().then(token => {
        this.moduleProvider.getModulesBySearch(event.target.value, token).then(result => {
          this.searchResult = result;
          if (this.searchResult.data[0]) {
            this.result = true;
            this.modules = this.searchResult.data;
          } else {
            this.result = false;
          }
          this.isLoading = false;
        })
      }).catch(error => {
        console.log(error);
        this.isLoading = false;
      });
    }
  }

  public cancelButtonClicked() {
    this.modules = null;
    this.result = true;
  }

  navigate(location: string, parameters?: any) {
    switch (location) {
      case 'module':
        this.navCtrl.push(ModuleDetailsPage, {'module': parameters, 'mirror': this.mirror});
        break;
      default:
    }
  }

}
