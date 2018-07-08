import { Component, OnInit } from '@angular/core';
import {MediumService} from '../../services/medium.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  items;

  constructor(private medium: MediumService) { }

  ngOnInit() {
    this.items = this.medium.items;
      this.medium.itemsUpdated.subscribe(items => {
      this.items = items;
      this.items.map(item => {
        item.pubDate = Date.parse(item.date);
        return item;
      }).sort((a, b) => {
        return a.date - b.date;
      });
    });
  }
}
