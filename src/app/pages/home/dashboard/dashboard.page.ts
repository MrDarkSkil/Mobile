import {Component, OnInit} from '@angular/core';
import {MirrorDto} from '../../../services/mirror/mirror.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public mirrors: MirrorDto[] = null;
  public loader = true;

  constructor() {
  }

  ngOnInit() {
  }

}
