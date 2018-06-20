import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isFlying = false;
  form = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private contact: ContactService) { }

  ngOnInit() {
  }

  sendForm() {
    this.isFlying = true;
    this.contact.submitForm(this.form)
      .subscribe(next => {
        this.isFlying = false;
        this.form.name = '';
        this.form.email = '';
        this.form.message = 'Thank You! Your message has been received. I usually respond within a few hours...';

        console.log(this.form);

        setTimeout(() => {
          this.form.message = '';
        }, 4000);
      }, error => {
        if (error.status === 200) {
          this.isFlying = false;
          this.form.name = '';
          this.form.email = '';
          this.form.message = 'Thank You! Your message has been received. I usually respond within a few hours...';

          console.log(this.form);

          setTimeout(() => {
            this.form.message = '';
          }, 4000);
        } else {
          const temp = this.form.message;
          this.form.message = 'Message not sent! Please try again...';
          setTimeout(() => {
            this.form.message = temp;
          }, 4000);
        }
      }).unsubscribe();
  }

}
