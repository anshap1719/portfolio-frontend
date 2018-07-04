import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  isMobile = false;

  constructor(device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
  }

}
