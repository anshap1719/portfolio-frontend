import {animate, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('image', [
    state('home', style({
      transform: 'translate(0, 0)',
    })),
    state('about',   style({
      transform: 'translate(calc(26vw + 30px), -50px)',
    })),
    state('contact',   style({
      transform: 'translate(0, 400px)',
    })),
    transition('* => *', animate('400ms linear')),
  ]),
  trigger('text', [
    state('home', style({
      transform: 'translate(0, 0) scale(1)',
      textAlign: '*'
    })),
    state('about',   style({
      marginTop: '70px',
      transform: 'translate(calc(-10vw - 12px), 0) scale(0.4)',
      textAlign: 'center'
    })),
    state('contact',   style({
      transform: 'translate(0, 400px)',
    })),
    transition('* => *', animate('400ms linear')),
  ]),
  trigger('animateImage', [
    state('false', style({
      width: '100%'
    })),
    state('true',   style({
      width: '30%'
    })),
    transition('* => *', animate('400ms linear')),
  ])
];
