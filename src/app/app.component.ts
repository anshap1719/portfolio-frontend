import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgsRevealConfig} from 'ng-scrollreveal';
import {StateService} from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHome: boolean;
  isAbout: boolean;

  @ViewChild('granim') granimElement: ElementRef;

  constructor(private router: Router, config: NgsRevealConfig, private granim: StateService) {
    config.duration = 1200;
    config.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
    config.distance = '200px';
  }

  ngOnInit() {
    this.isHome = this.router.url === '/';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = this.router.url === '/';
        this.isAbout = this.router.url === '/about';
        (<any>window).ga('set', 'page', value.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    this.granim.element = this.granimElement;
  }
}
