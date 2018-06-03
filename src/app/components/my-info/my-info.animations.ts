import {animate, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('heroState', [
    state('inactive', style({
      transform: 'translate(0, 0)',
      opacity: 1
    })),
    state('active',   style({
      transform: 'translate(0, 100px)',
      opacity: 0
    })),
    transition('inactive => active', animate('600ms 400ms ease-in')),
    transition('active => inactive', animate('600ms 400ms ease-out'))
  ]),
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
    transition('* => *', animate('600ms ease-in')),
  ]),
  trigger('text', [
    state('home', style({
      transform: 'translate(0, 0) scale(1)',
    })),
    state('about',   style({
      transform: 'translate(calc(-5vw), 70px)',
    })),
    state('contact',   style({
      transform: 'translate(0, 400px)',
    })),
    transition('* => *', animate('600ms ease-in')),
  ]),
  trigger('animateImage', [
    state('false', style({
      width: '100%'
    })),
    state('true',   style({
      width: '30%'
    })),
    transition('* => *', animate('600ms ease-in')),
  ]),
  trigger('animateText', [
    state('false', style({
      // fontSize: '*',
    })),
    state('true',   style({
      // fontSize: '30px',
    })),
    transition('* => *', animate('600ms ease-in')),
  ])
];
