import {ModuleWithProviders} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {EmptyComponent} from './components/empty/empty.component';

const routes: Route[] = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: '',
    component: EmptyComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
