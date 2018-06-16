import {Component, Input, OnInit} from '@angular/core';
import {StateService} from '../../../services/state.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  bgColor = '#f94877';

  @Input('tags') tags: [any];

  constructor(private granim: StateService) { }

  ngOnInit() {
    this.granim.gradientChange.subscribe(colorDetails => {
      this.bgColor = colorDetails.colorsTo[1];
    });
  }

}
