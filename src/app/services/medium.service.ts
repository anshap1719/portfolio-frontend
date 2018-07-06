import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private http: HttpClient) { }

  fetchPosts() {
    console.log("Fetch Called!");
    return this.http.get('/.netlify/functions/index', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// rss.channel[0].item
