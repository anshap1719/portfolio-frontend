import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routing} from './app-routing.module';
import { MyInfoComponent } from './components/my-info/my-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmptyComponent } from './components/empty/empty.component';
import {NgsRevealModule} from 'ng-scrollreveal';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyInfoComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    NgsRevealModule.forRoot(),
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
