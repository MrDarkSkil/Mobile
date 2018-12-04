import { Component } from '@angular/core';

@Component({
  selector: 'mirror-popover',
  templateUrl: 'mirror-popover.html'
})
export class MirrorPopoverComponent {

  text: string;

  constructor() {
    console.log('Hello MirrorPopoverComponent Component');
    this.text = 'Hello World';
  }

}
