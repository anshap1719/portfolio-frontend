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

  constructor(private medium: MediumService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.medium.fetchPosts().subscribe((next: any) => {
      console.log(next);
      console.log(this.htmlDecode(next.items[0].content));
      this.html = this.getHtml(this.htmlDecode(next.items[0].content));
      console.log(this.html);
    });
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }

  htmlDecode(str) {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  }
}
