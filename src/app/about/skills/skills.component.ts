import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input('showSkills') showSkills: boolean;
  @Input('barColor') barColor: [any];

  constructor() { }

  ngOnInit() {
  }

}
