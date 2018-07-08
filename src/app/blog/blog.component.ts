import { Component, OnInit } from '@angular/core';
import {MediumService} from '../services/medium.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  html;
  items;

  constructor(private medium: MediumService) { }

  ngOnInit() {
    this.medium.itemsUpdated.subscribe(items => {
      this.items = items;
      this.html = items[0].content;
    });
    this.medium.fetchPosts();
  }
}
