import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PortfoliosService} from '../../services/portfolios.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  activeItem;
  items;

  @Input('activeIndex') activeIndex: number;
  @Output('close') close = new EventEmitter();

  constructor(portfolio: PortfoliosService, private sanitizer: DomSanitizer) {
    this.items = portfolio.items;
  }

  ngOnInit() {
    this.activeItem = this.items[this.activeIndex];
  }

  closeLightbox() {
    this.close.emit();
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }

}
