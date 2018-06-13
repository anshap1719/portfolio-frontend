import {ElementRef, EventEmitter, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare var Granim: any;

@Injectable({
  providedIn: 'root'
})
export class StateService {
  granim;
  element;
  once = 0;
  gradientChange = new EventEmitter();

  constructor(private router: Router) { }

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
            ['#FF6B6B', '#556270'],
            ['#EB3349', '#F45C43'],
            ['#24C6DC', '#514A9D'],
          ],
          transitionSpeed: 8000
        },
        'contact': {
          gradients: [ ['#FF4E50', '#F9D423'] ],
          loop: false
        }
      },
      onGradientChange: colorDetails => {
        this.gradientChange.emit(colorDetails);
      }
    });
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if (value.url.indexOf('home') !== -1 && this.once === 0) {
          this.once++;
          return;
        } else {
          setTimeout(() => {
            this.granim.changeState(value.url.replace('/', ''));
          }, 1000);
        }
      }
    });
  }
}
