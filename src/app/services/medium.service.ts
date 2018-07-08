import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  items;

  private updateItems = new Subject<any>();
  itemsUpdated = this.updateItems.asObservable();

  constructor(private http: HttpClient) { }

  fetchPosts() {
    const request = this.http.get('/index', {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    request.subscribe((next: any) => {
      this.items = next.items;
      this.items = this.items.map(item => {
        item.content = this.htmlDecode(item.content);
        return item;
      });
      this.updateItems.next(this.items);
      localStorage.setItem('items', JSON.stringify(this.items));
    });
  }

  htmlDecode(str) {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  }
}

// rss.channel[0].item
