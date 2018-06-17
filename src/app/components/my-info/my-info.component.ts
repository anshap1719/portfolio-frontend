import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animations} from './my-info.animations';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
  animations: animations
})
export class MyInfoComponent implements OnInit {
  isHome;
  name: string;
  urlState = 'home';
  animateImage = false;
  animateText = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isHome = Boolean(this.router.url === '/');
    this.urlState = this.router.url.split('/')[1];
    if (this.urlState === 'about') {
      this.changeAnimateTextState({ toState: 'about' });
      this.changeAnimateImageState({ toState: 'about' });
    }
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = Boolean(value.url === '/');
        this.urlState = value.url.split('/')[1];
      }
    });
  }

  changeAnimateImageState(event) {
    this.animateImage = event.toState.indexOf('about') !== -1 || event.toState.indexOf('contact') !== -1;
  }

  changeAnimateTextState(event) {
    this.animateText = event.toState.indexOf('about') !== -1 || event.toState.indexOf('contact') !== -1;
  }
}
