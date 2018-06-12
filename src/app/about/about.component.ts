import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

declare var ScrollMagic: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  scenes = [];

  constructor() { }

  @ViewChild('right1') right1: ElementRef;
  @ViewChild('right2') right2: ElementRef;
  @ViewChild('right3') right3: ElementRef;
  @ViewChild('right4') right4: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.scenes.forEach(scene => {
      console.log('Refreshed!');
      scene.refresh();
    });
  }

  ngOnInit() {
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: '#left1',
      triggerHook: 0,
      offset: 0
    })
      .setPin('#left1')
      .duration(this.getSectionHeight(this.right1))
      .addTo(controller);
    this.scenes.push(scene);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: '#left2',
      triggerHook: 0,
      offset: 0
    })
      .setPin('#left2')
      .duration(this.getSectionHeight(this.right2))
      .addTo(controller);
    this.scenes.push(scene2);
    const scene3 = new ScrollMagic.Scene({
      triggerElement: '#left3',
      triggerHook: 0,
      offset: 0
    })
      .setPin('#left3')
      .duration(this.getSectionHeight(this.right3))
      .addTo(controller);
    this.scenes.push(scene3);

    const scene4 = new ScrollMagic.Scene({
      triggerElement: '#left4',
      triggerHook: 0,
      offset: 0
    })
      .setPin('#left4')
      .duration(this.getSectionHeight(this.right4))
      .addTo(controller);
    this.scenes.push(scene4);
  }

  getSectionHeight(element: ElementRef): any {
    return <any>window.getComputedStyle(element.nativeElement).height.split('px')[0] - window.innerHeight + 40;
  }

}
