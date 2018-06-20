import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {encode} from 'punycode';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  submitForm(form: any) {
    console.log(form);
    const data = { 'form-name': 'contact', ...form };
    let url = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
    }).join('&');
    url = '/contact?' + url;

    console.log(url);

    return new Promise(resolve => {
      this.http.post(url, null, {
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
