import {ElementRef, EventEmitter, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Meta} from '@angular/platform-browser';

declare var Granim: any;

@Injectable({
  providedIn: 'root'
})
export class GranimService {
  granim;
  default;
  element;
  once = 0;
  gradientChange = new EventEmitter();
  stateChange = new EventEmitter<string>();

  constructor(router: Router, private meta: Meta) {
    router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        console.log(value.url);
        if (value.url.indexOf('home') !== -1 || value.url === '/') {
          this.default = 'home';
          if (this.granim) {
            this.granim.changeState('home');
            this.stateChange.emit('home');
          }
        } else if (value.url.indexOf('about') !== -1) {
          this.default = 'about';
          if (this.granim) {
            this.granim.changeState('about');
            this.stateChange.emit('about');
          }
        } else if (value.url.indexOf('contact') !== -1) {
          this.default = 'contact';
          if (this.granim) {
            this.granim.changeState('contact');
            this.stateChange.emit('contact');
          }
        } else if (value.url.indexOf('/blog/posts/') !== -1) {
          console.log('Executing This!!');
          this.default = 'post';
          if (this.granim) {
            this.granim.changeState('post');
            this.stateChange.emit('post');
          }
        } else if (value.url.indexOf('/blog') !== -1) {
          this.default = 'blog';
          if (this.granim) {
            this.granim.changeState('blog');
            this.stateChange.emit('blog');
          }
        }

        if (!this.granim) {
          this.init();
        }
      }
    });
  }

  init() {
    this.granim = new Granim({
      element: this.element.nativeElement,
      opacity: [1, 1],
      stateTransitionSpeed: 500,
      defaultStateName: 'home',
      states : {
        'home': {
          gradients: [
            ['#AA076B', '#61045F'],
            ['#02AAB0', '#00CDAC'],
            ['#DA22FF', '#9733EE']
          ],
          transitionSpeed: 6000
        },
        'about': {
          gradients: [
            ['#29323c', '#485563'],
            ['#0D050E', '#2B193E'],
            ['#003D73', '#132226'],
            ['#24C6DC', '#514A9D'],
          ],
          transitionSpeed: 8000
        },
        'contact': {
          gradients: [
            ['#0D050E', '#2B193E'],
            ['#9733EE', '#23345C'],
            ['#000', '#003D73'],
            ['#003D73', '#132226']
          ],
          transitionSpeed: 8000
        },
        'blog': {
          gradients: [
            ['#02AAB0', '#00CDAC'],
            ['#DA22FF', '#9733EE'],
            ['#003D73', '#132226'],
            ['#24C6DC', '#514A9D'],
          ],
          transitionSpeed: 8000
        },
        'post': {
          gradients: [
            ['#fff', '#fff'],
          ]
        }
      },
      onGradientChange: colorDetails => {
        this.gradientChange.emit(colorDetails);
        this.meta.updateTag({ name: 'theme-color', content: colorDetails.colorsFrom[1] });
      }
    });
    this.granim.changeState(this.default);
    this.stateChange.emit(this.default);
  }
}
