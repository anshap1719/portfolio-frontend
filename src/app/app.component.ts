import {Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgsRevealConfig} from './ngs';
import {GranimService} from './services/granim.service';
import {DeviceService} from './services/device.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHome: boolean;
  hideFooter = true;
  isMobile = false;
  progressColor = '#fff';
  isBlog;
  isBrowser;

  @ViewChild('granim') granimElement: ElementRef;

  constructor(
    private router: Router,
    config: NgsRevealConfig,
    private granim: GranimService,
    private device: DeviceService,
    @Inject(PLATFORM_ID) private platformId) {
    config.duration = 1200;
    config.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
    config.distance = '200px';
    config.mobile = true;
    this.isMobile = this.device.isMobile();
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.isHome = this.router.url === '/';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if (value.urlAfterRedirects === '/' && this.isMobile) {
          this.router.navigate(['/home']);
        }
        this.isHome = this.router.url === '/';
        this.isBlog = this.router.url.indexOf('/blog/posts/') !== -1;
        setTimeout(() => {
          this.hideFooter = !Boolean(this.router.url === '/home');
        }, 500);
        if (this.isBrowser) {
          (<any>window).ga('set', 'page', value.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
        this.router.url.indexOf('blog') === -1 ? this.progressColor = '#fff' : this.progressColor = 'red';
      }
    });
    this.granim.element = this.granimElement;
  }
}
