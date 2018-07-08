import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog.component';
import {PostComponent} from './post/post.component';
import {BlogListComponent} from './blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts/:id',
        component: PostComponent
      },
      {
        path: 'posts',
        component: BlogListComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
