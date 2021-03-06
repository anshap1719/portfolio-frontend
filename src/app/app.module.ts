import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routing} from './app-routing.module';
import { MyInfoComponent } from './components/my-info/my-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmptyComponent } from './components/empty/empty.component';
import {NgsRevealModule} from './ngs';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgProgressRouterModule} from '@ngx-progressbar/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyInfoComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgsRevealModule.forRoot(),
    routing,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    NgProgressRouterModule,
    NgxJsonLdModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
