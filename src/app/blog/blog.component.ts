import { Component, OnInit } from '@angular/core';
import {MediumService} from '../services/medium.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private medium: MediumService) { }

  ngOnInit() {
    if (!this.medium.items) {
      this.medium.fetchPosts();
    }
  }
}
