import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  countUp = {
    useEasing: false,
    useGrouping: true,
    separator: ',',
    suffix: '+'
  };
  isMobile = false;

  constructor(device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
  }

}
