import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {NgProgress} from '@ngx-progressbar/core';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  items;

  private updateItems = new Subject<any>();
  itemsUpdated = this.updateItems.asObservable();

  constructor(private http: HttpClient, private progress: NgProgress) { }

  fetchPosts() {
    return new Promise((resolve => {
      this.progress.start();
      const request = this.http.get('/.netlify/functions/index', {
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
        this.progress.complete();
        resolve();
      });
    }));
  }

  htmlDecode(str) {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  }
}

// rss.channel[0].item
