import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isHome;

  constructor(private router: Router, private gramin: StateService) { }

  ngOnInit() {
    this.isHome = Boolean(this.router.url === '/');
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = Boolean(value.url === '/');
      }
    });
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }

    this.gramin.init();
  }
}
