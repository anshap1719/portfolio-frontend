import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {StateService} from '../services/state.service';
import {Router} from '@angular/router';
import {DeviceService} from '../services/device.service';

declare var ScrollMagic: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  textColor;
  showSkills;
  showCounts = false;
  isMobile = false;

  constructor(private granim: StateService, private router: Router, device: DeviceService) {
    this.isMobile = device.isMobile();
    this.showCounts = this.isMobile;
  }

  @ViewChild('right1') right1: ElementRef;
  @ViewChild('right2') right2: ElementRef;
  @ViewChild('right3') right3: ElementRef;
  @ViewChild('right4') right4: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (!this.isMobile) {
      this.router.navigate(['/home']).then(() => {
        this.router.navigate(['/about']);
      });
      // this.router.navigate(['/about']);
    }
  }

  ngOnInit() {
    this.initScrollmagic();

    setTimeout(() => {
      this.showCounts = true;
    }, 300);

    this.granim.gradientChange.subscribe(colorDetails => {
      this.textColor = colorDetails.colorsTo[1];
    });

    if (this.isMobile) {
      this.showSkills = true;
    }
  }

  getSectionHeight(element: ElementRef): any {
    return <any>window.getComputedStyle(element.nativeElement).height.split('px')[0] - window.innerHeight + 120;
  }

  initScrollmagic() {
    if (!this.isMobile) {
      const controller = new ScrollMagic.Controller();
      const scene = new ScrollMagic.Scene({
        triggerElement: '#left1',
        triggerHook: 0,
        offset: 0
      })
        .setPin('#left1')
        .duration(this.getSectionHeight(this.right1))
        .on('end', event => this.showSkills = true)
        .addTo(controller);

      const scene2 = new ScrollMagic.Scene({
        triggerElement: '#left2',
        triggerHook: 0,
        offset: 0
      })
        .setPin('#left2')
        .duration(this.getSectionHeight(this.right2))
        .addTo(controller);

      const scene3 = new ScrollMagic.Scene({
        triggerElement: '#left3',
        triggerHook: 0,
        offset: 0
      })
        .setPin('#left3')
        .duration(this.getSectionHeight(this.right3))
        .addTo(controller);

      const scene4 = new ScrollMagic.Scene({
        triggerElement: '#left4',
        triggerHook: 0,
        offset: 0
      })
        .setPin('#left4')
        .duration(this.getSectionHeight(this.right4))
        .addTo(controller);
    }
  }

}
