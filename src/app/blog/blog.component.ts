import { Component, OnInit } from '@angular/core';
import {MediumService} from '../services/medium.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  html;
  items;

  constructor(private medium: MediumService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const items = JSON.parse(localStorage.getItem('items'));
    console.log(items);
    if (!items) {
      this.medium.itemsUpdated.subscribe(next => {
        this.items = next;
        this.html = next[0].content;
      });
      this.medium.fetchPosts();
    } else {
      this.items = items;
      this.html = this.getHtml(items[0].content);
    }
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }
}
