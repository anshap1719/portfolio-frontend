import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediumService} from '../../services/medium.service';
import {DomSanitizer} from '@angular/platform-browser';
import {GranimService} from '../../services/granim.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post;

  constructor(
    private route: ActivatedRoute,
    private medium: MediumService,
    private sanitizer: DomSanitizer,
    private granim: GranimService) { }

  ngOnInit() {
    this.granim.granim.changeState('post');
    const id  = this.route.snapshot.paramMap.get('id');
    this.post = this.getHtml(this.medium.items[id].content);
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }
}
