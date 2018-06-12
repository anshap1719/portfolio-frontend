import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {animations} from './navbar.animations';

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
  constructor(private router: Router) {}

  ngOnInit() {
    this.animationState = 'active';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        value.url === '/' ? this.delay = 2000 : this.delay = 300;
        this.animationState = 'inactive';
      }
    });
    this.isHome = false;
  }

  animationComplete(event) {
    if (event.fromState !== 'void' && this.router.url === '/') {
      this.router.navigate(['/home']);
    }
  }
}
