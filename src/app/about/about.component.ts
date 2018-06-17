import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {StateService} from '../services/state.service';
import {Router} from '@angular/router';

declare var ScrollMagic: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  textColor;
  showSkills;
  barColor;
  showCounts = false;

  constructor(private granim: StateService, private router: Router) { }

  @ViewChild('right1') right1: ElementRef;
  @ViewChild('right2') right2: ElementRef;
  @ViewChild('right3') right3: ElementRef;
  @ViewChild('right4') right4: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('Executing...');
    this.router.navigate(['/home']).then(() => {
      this.router.navigate(['/about']);
    });
    // this.router.navigate(['/about']);
  }

  ngOnInit() {
    this.initScrollmagic();
    setTimeout(() => {
      this.showCounts = true;
    }, 300);
  }

  getSectionHeight(element: ElementRef): any {
    return <any>window.getComputedStyle(element.nativeElement).height.split('px')[0] - window.innerHeight + 40;
  }

  initScrollmagic() {
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: '#left1',
      triggerHook: 0,
      offset: 0
    })
      .setPin('#left1')
      .duration(this.getSectionHeight(this.right1))
      .on('end', event => this.showSkills = event.scrollDirection === 'FORWARD')
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

    this.granim.gradientChange.subscribe(colorDetails => {
      this.textColor = colorDetails.colorsTo[1];
      this.barColor = colorDetails.colorsTo;
    });
  }

}
