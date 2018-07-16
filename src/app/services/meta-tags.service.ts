import {Injectable, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {

      }
    });
  }
}
