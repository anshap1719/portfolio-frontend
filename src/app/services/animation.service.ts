import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  navAnimationComplete = new EventEmitter();

  constructor() { }
}
