import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email: string = null;
  public password: string = null;
  public passwordConfirmation: string = null;

  constructor() { }

  ngOnInit() {
  }

}
