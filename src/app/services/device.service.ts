import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  isBrowser;
  webP;

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

  hasWebPSupport() {
    const elem = document.createElement('canvas') as any;

    if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      this.webP =  elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      // very old browser like IE 8, canvas not supported
      this.webP = false;
    }
  }
}
