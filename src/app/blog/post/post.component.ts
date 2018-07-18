import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediumService} from '../../services/medium.service';
import {DomSanitizer} from '@angular/platform-browser';
import {GranimService} from '../../services/granim.service';
import {NgProgress} from '@ngx-progressbar/core';
import {MetaTagsService} from '../../services/meta-tags.service';

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
    private progress: NgProgress,
    private metaTags: MetaTagsService) { }

  ngOnInit() {
    const id  = this.route.snapshot.paramMap.get('id');
    if (this.medium.items) {
      this.post = this.getHtml(this.medium.items[id].content);
    } else {
      this.progress.start();
      this.medium.fetchPosts()
        .then(() => {
          this.post = this.medium.items[id].content;
          this.progress.complete();

          this.metaTags.init();
        });
    }
  }

  getHtml(unsafe: string) {
    return this.sanitizer.bypassSecurityTrustHtml(unsafe);
  }
}
