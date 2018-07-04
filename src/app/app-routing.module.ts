import {ModuleWithProviders} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {EmptyComponent} from './components/empty/empty.component';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';

const routes: Route[] = [
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'about',
    loadChildren: () => AboutModule
  },
  {
    path: 'contact',
    loadChildren: () => ContactModule
  },
  {
    path: '',
    component: EmptyComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
