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

  htmlDecode(input) {
    const e = (<any>document).createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }
}
