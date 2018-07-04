import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  isMobile = false;

  constructor(device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
  }

}
