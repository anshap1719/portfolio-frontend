import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {routing} from './home-routing.module';
import {HomeComponent} from './home.component';
import {PortfoliosComponent} from './portfolios/portfolios.component';
import {RouterModule} from '@angular/router';
import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AnimateOnScrollModule.forRoot(),
    routing
  ],
  declarations: [
    HomeComponent,
    PortfoliosComponent
  ]
})
export class HomeModule { }
