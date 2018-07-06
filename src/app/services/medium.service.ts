import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private http: HttpClient) { }

  fetchPosts() {
    console.log("Fetch Called!");
    this.http.get('http://localhost:9000/index', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(next => {
      console.log(next);
    });
  }
}

// rss.channel[0].item

// function htmlDecode(input){
//   var e = document.createElement('div');
//   e.innerHTML = input;
//   return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
// }
