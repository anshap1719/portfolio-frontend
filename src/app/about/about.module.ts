import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import {routing} from './about-routing.module';
import {NgsRevealModule} from 'ng-scrollreveal';

@NgModule({
  imports: [
    CommonModule,
    NgsRevealModule,
    routing
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
