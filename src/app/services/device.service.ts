import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  isBrowser;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  isMobile() {
    if (this.isBrowser) {
      return (<any>window).innerWidth < 1000;
    } else {
      return false;
    }
  }
}
