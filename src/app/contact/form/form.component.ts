import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {DeviceService} from '../../services/device.service';
import {NgForm} from '@angular/forms';

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
  invalidEmail;
  isMobile = false;
  submitAttempt = false;

  @ViewChild('formElem') formElem: NgForm;

  constructor(private contact: ContactService, device: DeviceService) {
    this.isMobile = device.isMobile();
  }

  ngOnInit() {
  }

  checkEmail() {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.invalidEmail = !regexp.test(this.form.email);
  }

  sendForm() {
    this.submitAttempt = true;
    if (!this.formElem.invalid && (this.formElem.touched || this.formElem.dirty)) {
      this.isFlying = true;
      this.contact.submitForm(this.form)
        .subscribe(next => {
          this.isFlying = false;
          this.form.name = '';
          this.form.email = '';
          this.form.message = 'Thank You! Your message has been received. I usually respond within a few hours...';

          setTimeout(() => {
            this.submitAttempt = false;
            this.form.message = '';
          }, 4000);
        }, error => {
          if (error.status === 200) {
            this.isFlying = false;
            this.form.name = '';
            this.form.email = '';
            this.form.message = 'Thank You! Your message has been received. I usually respond within a few hours...';

            setTimeout(() => {
              this.submitAttempt = false;
              this.form.message = '';
            }, 4000);
          } else {
            const temp = this.form.message;
            this.form.message = 'Message not sent! Please try again... If you are unable to message using the form, please send an email instead.';
            setTimeout(() => {
              this.submitAttempt = false;
              this.form.message = temp;
            }, 4000);
          }
        }).unsubscribe();
    }
  }

}
