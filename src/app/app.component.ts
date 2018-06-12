import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgsRevealConfig} from 'ng-scrollreveal';
import {StateService} from './services/state.service';

declare var Granim: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  isHome: boolean;

  @ViewChild('granim') granimElement: ElementRef;

  constructor(private router: Router, config: NgsRevealConfig) {
    config.duration = 1200;
    config.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
    config.distance = '200px';
  }

  ngOnInit() {
    this.isHome = this.router.url === '/';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = this.router.url === '/';
      }
    });
    this.granim.element = this.granimElement;
  }
}
