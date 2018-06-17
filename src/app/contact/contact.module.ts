import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormComponent } from './form/form.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ContactComponent, ContactDetailsComponent, FormComponent, SocialMediaComponent]
})
export class ContactModule { }
