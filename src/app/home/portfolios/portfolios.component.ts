import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {PortfoliosService} from '../../services/portfolios.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  isHome;
  items;

  constructor(private router: Router, private portfolio: PortfoliosService) { }

  ngOnInit() {
    this.isHome = Boolean(this.router.url === '/');
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isHome = Boolean(value.url === '/');
      }
    });
    this.items = this.portfolio.items;
  }

}
