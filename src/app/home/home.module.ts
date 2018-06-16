import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './home-routing.module';
import {HomeComponent} from './home.component';
import {PortfoliosComponent} from './portfolios/portfolios.component';
import {RouterModule} from '@angular/router';
import {NgsRevealModule} from 'ng-scrollreveal';
import { TagComponent } from './portfolios/tag/tag.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgsRevealModule,
    routing
  ],
  declarations: [
    HomeComponent,
    PortfoliosComponent,
    TagComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
