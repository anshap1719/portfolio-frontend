import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  isMobile = false;

  constructor(device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
  }

}
