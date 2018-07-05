import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgsRevealConfig} from 'ng-scrollreveal';
import {GranimService} from './services/granim.service';
import {DeviceService} from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHome: boolean;
  hideFooter = true;
  isMobile = false;

  @ViewChild('granim') granimElement: ElementRef;

  constructor(private router: Router, config: NgsRevealConfig, private granim: GranimService, private device: DeviceService) {
    config.duration = 1200;
    config.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
    config.distance = '200px';
    config.mobile = true;
    this.isMobile = this.device.isMobile();
  }

  ngOnInit() {
    if (this.router.url === '/' && this.device.isMobile()) {
      this.router.navigate(['/home']);
    }
    this.isHome = this.router.url === '/';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = this.router.url === '/';
        setTimeout(() => {
          this.hideFooter = !Boolean(this.router.url === '/home');
        }, 500);
        (<any>window).ga('set', 'page', value.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    this.granim.element = this.granimElement;
  }
}
