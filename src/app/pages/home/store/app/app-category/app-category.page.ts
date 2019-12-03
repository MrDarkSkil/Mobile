import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-app-category',
  templateUrl: './app-category.page.html',
  styleUrls: ['./app-category.page.scss'],
})
export class AppCategoryPage implements OnInit {

  public readonly categories;

  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    this.categories = navParams.get('categories');
    console.log(this.categories);
  }

  ngOnInit() {
  }

  public close() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  public selected(category: string) {
    this.modalCtrl.dismiss({
      dismissed: true,
      value: category
    });
  }

}
