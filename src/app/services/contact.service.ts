import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {encode} from 'punycode';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  submitForm(form: any) {
    const data = { 'form-name': 'contact', ...form };

    let url = Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');
    url = '/contact?' + url;

    return this.http.post(url, null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}
