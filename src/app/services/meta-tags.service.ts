import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MediumService} from './medium.service';

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private router: Router, private blog: MediumService) { }

  init() {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        const urls = value.urlAfterRedirects.split('/');
        const postId = parseInt(urls[urls.length - 1]);
        if (value.urlAfterRedirects.indexOf('/blog/posts/') !== -1) {
          const post = this.blog.items[postId];
          console.log(post);
        }
      }
    });
  }
}
