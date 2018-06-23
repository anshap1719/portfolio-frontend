import {animate, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('image', [
    state('home', style({
      transform: 'translate(0, 0)',
    })),
    state('about',   style({
      transform: 'translate(28.08vw, -50px)',
    })),
    state('contact',   style({
      transform: 'translate(6.8vw, calc(3vh - 50px))',
    })),
    transition('* => *', animate('400ms linear')),
    transition('about <=> contact', animate('200ms linear')),
  ]),
  trigger('text', [
    state('home', style({
      transform: 'translate(0, 0) scale(1)',
      textAlign: '*'
    })),
    state('about',   style({
      marginTop: '10vh',
      transform: 'translate(-10.833vw, 0) scale({{scale}})',
      textAlign: 'center'
    }),
      {
        params: { scale: '0.4'}
      }),
    state('contact',   style({
      marginTop: '10vh',
      transform: 'translate(-32vw, 3vh) scale({{scale}})',
      textAlign: 'left'
    }),
    {
      params: { scale: '0.4'}
    }),
    transition('* => *', animate('400ms linear')),
    transition('about <=> contact', animate('200ms linear')),
  ]),
  trigger('animateImage', [
    state('false', style({
      width: '100%'
    })),
    state('true',   style({
      width: '{{width}}'
    }),
    {
      params: { width: '30%'}
    }),
    transition('* => *', animate('400ms linear')),
  ])
];
