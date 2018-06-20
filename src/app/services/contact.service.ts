import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {encode} from 'punycode';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  submitForm(form: any) {
    return new Promise(resolve => {
      this.http.post('/', encode({ 'form-name': 'contact', ...form }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .subscribe(next => {
          resolve();
          console.log(next);
        });
    });
  }
}
