import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {PortfoliosService} from '../../services/portfolios.service';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  isHome;
  items;
  lightbox = false;
  activeItem = 0;
  isMobile;

  constructor(private router: Router, private portfolio: PortfoliosService, device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
    this.isHome = Boolean(this.router.url === '/');
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = Boolean(value.url === '/');
      }
    });
    this.items = this.portfolio.items;
  }

  showLightbox(index: number) {
    this.activeItem = index;
    this.lightbox = true;
  }

  closeLightbox() {
    this.lightbox = false;
  }

}
