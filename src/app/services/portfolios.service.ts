import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  items = [
    {
      title: 'Rolando Mathias\' Portfolio Website',
      description: 'Some Description',
      image: '/assets/rolando.png',
      url: 'https://rolandomathi.as',
      tags: ['HTML', 'CSS', 'JavaScript', 'Zeplin', 'Gulp']
    },
    {
      title: 'Greater Commons',
      description: 'Some Description',
      image: '/assets/greatercommons.png',
      url: 'https://greatercommons.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'Golang', 'Google Cloud Platform', 'Microservices']
    },
    {
      title: 'Cactus',
      description: 'Some Description',
      image: '/assets/cactus.png',
      url: 'https://cactus.is',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SquareSpace']
    },
    {
      title: 'AdSpark',
      description: 'Some Description',
      image: '/assets/adspark.png',
      url: 'https://adspark.ru',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    },
    {
      title: 'Compute Vision - Similar Logo Finder',
      description: 'Some Description',
      image: '/assets/compute-vision.png',
      url: 'http://compute.vision',
      tags: ['HTML', 'CSS', 'JavaScript', 'BulmaCSS', 'KnockoutJS', 'Gulp']
    },
    {
      title: 'Gamoloco',
      description: 'Some Description',
      image: '/assets/gamoloco.png',
      url: 'https://gamoloco.com',
      tags: ['Golang', 'MongoDB']
    },
    {
      title: 'Adnut',
      description: 'Some Description',
      image: '/assets/adnut.png',
      url: 'https://adnut.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress']
    },
    {
      title: 'Red Contender',
      description: 'Some Description',
      image: '/assets/redcontender.png',
      url: 'http://redcontentender.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular 5', 'BulmaCSS']
    },
    {
      title: 'Sample Angular 6 App',
      description: 'Some Description',
      image: '/assets/sample-app.png',
      url: 'https://anshap1719.github.io/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular 6', 'Google Maps API']
    },
  ];

  constructor() { }
}
