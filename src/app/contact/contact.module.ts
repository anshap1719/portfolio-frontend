import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormComponent } from './form/form.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import {FormsModule} from '@angular/forms';
import {NgsRevealModule} from 'ng-scrollreveal';
import {ContactService} from '../services/contact.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgsRevealModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    ContactComponent,
    ContactDetailsComponent,
    FormComponent,
    SocialMediaComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
