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
      .then(() => {
        this.isFlying = false;
      });
  }

}
