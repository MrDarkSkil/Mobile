import { Injectable } from '@angular/core';

@Injectable()
export class TabProvider {

  constructor() {
    //
  }

  public hideTab() {
    let elements = document.querySelectorAll(".tabbar");
    let fab = document.querySelectorAll("ion-fab");

    if (elements != null && fab != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });

      Object.keys(fab).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  public displayTab() {
    let elements = document.querySelectorAll(".tabbar");
    let fab = document.querySelectorAll(".fab");

    if (elements != null && fab != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });

      Object.keys(fab).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

}
