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
  animationState = 'inactive';
  urlState = 'home';
  animateImage = false;
  animateText = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isHome = Boolean(this.router.url === '/');
    this.animationState = Boolean(this.router.url === '/') ? 'active' : 'inactive';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = Boolean(value.url === '/');
        this.animationState = Boolean(value.url === '/') ? 'active' : 'inactive';
        this.urlState = value.url.replace('/', '');
      }
    });
  }

  changeAnimateImageState(event) {
    this.animateImage = Boolean(event.toState === 'about');
  }

  changeAnimateTextState(event) {
    this.animateText = Boolean(event.toState === 'about');
  }

}
