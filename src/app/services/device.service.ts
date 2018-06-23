import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  isMobile() {
    return (<any>window).innerWidth < 1000;
  }
}
