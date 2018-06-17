import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PortfoliosService} from '../../services/portfolios.service';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations: [
    trigger('lightbox', [
      state('void', style({
        opacity: 0.8,
        transform: 'translateX(-100vw)'
      })),
      state('true',   style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('false',   style({
        opacity: 1,
        transform: 'translateX(100vw)'
      })),
      transition('void => true', animate('400ms ease-out')),
      transition('true => false', animate('400ms ease-in')),
    ])
  ]
})
export class LightboxComponent implements OnInit {
  activeItem;
  items;

  @Input('activeIndex') activeIndex: number;
  @Input('lightbox') lightbox: boolean;
  @Output('close') close = new EventEmitter();

  constructor(portfolio: PortfoliosService, private sanitizer: DomSanitizer) {
    this.items = portfolio.items;
  }

  ngOnInit() {
    this.activeItem = this.items[this.activeIndex];
  }

  closeLightbox() {
    this.lightbox = false;
    setTimeout(() => {
      this.close.emit();
    }, 400);
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }

}
