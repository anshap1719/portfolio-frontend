import { Component, OnInit } from '@angular/core';
import {MediumService} from '../../services/medium.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  items;
  randomColors = [];

  constructor(private medium: MediumService) { }

  ngOnInit() {
    this.randomColor();
    this.items = this.medium.items;
      this.medium.itemsUpdated.subscribe(items => {
      this.items = items;
    });
  }

  randomColor() {
    let colors = ['#AA076B', '#61045F', '#DA22FF', '#9733EE', '#29323c', '#485563', '#0D050E', '#2B193E', '#003D73', '#132226'];

    colors = colors.sort( () => 0.5 - Math.random());
    this.randomColors = [ ...colors ];
  }

}
