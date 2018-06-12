import {ModuleWithProviders} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {EmptyComponent} from './components/empty/empty.component';

const routes: Route[] = [
  {
    path: 'home',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: 'src/app/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: '',
    component: EmptyComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);