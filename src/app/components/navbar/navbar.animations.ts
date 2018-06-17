import {animate, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('heroState', [
    state('inactive', style({
      transform: 'scale(1) translate(0, 0)'
    })),
    state('active',   style({
      transform: 'scale(4) translate(10.317312vw, 9.722225vh)'
    })),
    transition('inactive => active', animate('600ms ease-in')),
    transition('active => inactive', animate('600ms {{delay}}ms ease-out'))
  ])
];
