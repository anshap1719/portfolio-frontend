import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  items = [
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/rolando.png',
      url: '/portfolio/something'
    },
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/greatercommons.png',
      url: '/portfolio/something'
    },
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/cactus.png',
      url: '/portfolio/something'
    },
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/adspark.png',
      url: '/portfolio/something'
    },
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/compute-vision.png',
      url: '/portfolio/something'
    },
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/gamoloco.png',
      url: '/portfolio/something'
    },
    {
      title: 'Some Title',
      description: 'Some Description',
      image: '/assets/adnut.png',
      url: '/portfolio/something'
    },
  ];

  constructor() { }
}
