import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        transform: 'scale(1) translate(0, 0)'
      })),
      state('active',   style({
        transform: 'scale(4) translate(calc((100vw - (200px * 3.488)) / 5), calc((100vh - 200px) / 8))'
      })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isHome: boolean;
  name: string;
  animationState = 'inactive';
  constructor(private router: Router) { }

  ngOnInit() {
    this.isHome = Boolean(this.router.url === '/');
    this.animationState = Boolean(this.router.url === '/') ? 'active' : 'inactive';
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = Boolean(value.url === '/');
        this.animationState = Boolean(value.url === '/') ? 'active' : 'inactive';
      }
    });
  }
}
