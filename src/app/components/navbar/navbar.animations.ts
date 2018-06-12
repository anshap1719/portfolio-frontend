import {animate, state, style, transition, trigger} from '@angular/animations';

export const animations = [
  trigger('heroState', [
    state('inactive', style({
      transform: 'scale(1) translate(0, 0)'
    })),
    state('active',   style({
      transform: 'scale(4) translate(calc((100vw - (200px * 3.488)) / 5), calc((100vh - 200px) / 8))'
    })),
    transition('inactive => active', animate('600ms ease-in')),
    transition('active => inactive', animate('600ms {{delay}}ms ease-out'))
  ])
];
