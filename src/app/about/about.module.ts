import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import {routing} from './about-routing.module';
import {NgsRevealModule} from 'ng-scrollreveal';
import { SkillsComponent } from './skills/skills.component';
import {CountUpModule} from 'countup.js-angular2';
import { StatsComponent } from './stats/stats.component';
import { IntroComponent } from './intro/intro.component';
import { WorkHistoryComponent } from './work-history/work-history.component';

@NgModule({
  imports: [
    CommonModule,
    NgsRevealModule,
    CountUpModule,
    routing
  ],
  declarations: [AboutComponent, SkillsComponent, StatsComponent, IntroComponent, WorkHistoryComponent]
})
export class AboutModule { }
