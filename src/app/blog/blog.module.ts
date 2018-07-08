import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import {routing} from './blog-routing.module';
import {RouterModule} from '@angular/router';
import { PostComponent } from './post/post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgProgressRouterModule} from '@ngx-progressbar/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  declarations: [BlogComponent, PostComponent, BlogListComponent]
})
export class BlogModule { }
