import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {animations} from './navbar.animations';
import {DeviceService} from '../../services/device.service';
import {GranimService} from '../../services/granim.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: animations
})
export class NavbarComponent implements OnInit {
  isHome: boolean;
  name: string;
  animationState = 'inactive';
  delay;
  isMobile;
  textColor = '#fff';
  logoImage: string;
  mobilenavOpen = false;

  constructor(private router: Router, private device: DeviceService, private granim: GranimService) {
    this.isMobile = this.device.isMobile();
  }

  ngOnInit() {
    this.logoImage = `/assets/logo.${this.device.webP ? 'webp' : 'png'}`;
    if (!this.isMobile) {
      this.animationState = 'active';
      this.router.events.subscribe(value => {
        if (value instanceof NavigationEnd) {
          value.url === '/' ? this.delay = 2000 : this.delay = 300;
          this.animationState = 'inactive';
          if (value.url.indexOf('/blog/posts/') !== -1) {
            this.logoImage = `/assets/logo-red.${this.device.webP ? 'webp' : 'png'}`;
          } else {
            this.logoImage = `/assets/logo.${this.device.webP ? 'webp' : 'png'}`;
          }
        }
      });
    }
    this.isHome = false;

    this.granim.stateChange.subscribe(state => {
      if (state === 'post') {
        this.textColor = '#000';
      } else {
        this.textColor = '#fff';
      }
    });
  }

  animationComplete(event) {
    if (event.fromState !== 'void' && this.router.url === '/') {
      this.router.navigate(['/home']);
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
