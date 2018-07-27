import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import {NgsRevealModule} from '../ngs';
import {ContactService} from '../services/contact.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgProgressRouterModule} from '@ngx-progressbar/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgsRevealModule,
    HttpClientModule,
    RouterModule,
    routing,
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  declarations: [
    ContactComponent,
    ContactDetailsComponent,
    FormComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
