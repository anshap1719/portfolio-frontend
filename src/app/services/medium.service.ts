import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  items;

  private updateItems = new Subject<any>();
  itemsUpdated = this.updateItems.asObservable();

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  fetchPosts() {
    console.log('Fetch Called!!');
    this.http.get('/.netlify/functions/index', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .subscribe((next: any) => {
        console.log('Subscribed!');
        this.items = next.items;
        this.items = this.items.map(item => {
          console.log(item);
          item.content = this.getHtml(this.htmlDecode(item.content));
          return item;
        });
        this.updateItems.next(this.items);
    }).unsubscribe();
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }

  htmlDecode(str) {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  }
}

// rss.channel[0].item
