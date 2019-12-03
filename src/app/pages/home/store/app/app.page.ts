import {Component, OnInit} from '@angular/core';
import {ApplicationsService} from '../../../../services/applications/applications.service';
import {ActivatedRoute, NavigationExtras} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {AppCategoryPage} from './app-category/app-category.page';
import {ApplicationsDto} from '../../../../services/applications/applications.dto';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  public loader = true;
  public applications: ApplicationsDto;
  public mirror: any = null;

  private category: any = null;

  constructor(private appsService: ApplicationsService, private route: ActivatedRoute, private navCtrl: NavController,
              private modalCtrl: ModalController) {
    this.category = this.route.snapshot.paramMap.get('category');

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.mirror = JSON.parse(params.special);
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
        console.log(this.applications);
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

  public async show_category() {
    const categoryMap = new Map();

    this.applications.data.forEach(application => {
      categoryMap.set(application.category, true);
    });

    const modal = await this.modalCtrl.create({
      component: AppCategoryPage,
      componentProps: {
        categories: Array.from(categoryMap.keys()),
      }
    });

    await modal.present();

    const {data} = await modal.onWillDismiss();
    if (data.value) {
      await this.navCtrl.navigateRoot('/store/app/' + data.value);
    }
  }

  public clearCategory() {
    this.navCtrl.navigateRoot('/store/app');
  }

}
