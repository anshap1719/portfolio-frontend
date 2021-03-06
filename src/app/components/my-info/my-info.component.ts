import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animations} from './my-info.animations';
import {DeviceService} from '../../services/device.service';

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
  imageMargin = 'center';
  imagePadding = '0';
  width = '30%';
  scale = '0.4';
  isMobile;
  supportsWebP;

  constructor(private router: Router, private device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
    this.supportsWebP = this.device.webP;
    this.isHome = Boolean(this.router.url === '/');
    if (!this.isMobile) {
      if (this.router.url === '/blog/posts') {
        this.urlState = 'about';
      } else {
        this.urlState = this.router.url.split('/')[1];
      }
      if (this.urlState === 'about') {
        this.changeAnimateTextState({ toState: 'about' });
        this.changeAnimateImageState({ toState: 'about' });
      }
      if (this.urlState === 'contact') {
        this.changeAnimateTextState({ toState: 'contact' });
        this.changeAnimateImageState({ toState: 'contact' });
      }
      this.router.events.subscribe(value => {
        if (value instanceof NavigationEnd) {
          this.isHome = Boolean(value.url === '/');
          if (this.router.url === '/blog/posts') {
            this.urlState = 'about';
          } else {
            this.urlState = this.router.url.split('/')[1];
          }
        }
      });
    } else {
      this.urlState = '/home';
    }
  }

  changeAnimateImageState(event) {
    this.animateImage = event.toState.indexOf('about') !== -1 || event.toState.indexOf('contact') !== -1;
    event.toState.indexOf('contact') !== -1 ? this.imageMargin = 'left' : this.imageMargin = 'center';
    event.toState.indexOf('contact') !== -1 ? this.imagePadding = '2vw' : this.imagePadding = '0';
  }

  changeAnimateTextState(event) {
    this.animateText = event.toState.indexOf('about') !== -1;
  }
}
