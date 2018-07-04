import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isMobile = false;

  @Input('showSkills') showSkills: boolean;

  constructor(device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
  }

}
