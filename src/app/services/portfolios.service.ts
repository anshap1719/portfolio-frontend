import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  items = [
    {
      title: 'Atsign Website Redesign',
      description: 'AtSign is the world\'s first keyword-based lead generation search engine. Users can enter any query that comes to mind and get back contact information. They can enter general keywords like, "dentist" or focused keywords like "dental equipment" or even specific products like, "dental surgical tool" and our tool will return a list of matching businesses and their respective contact information for outreach purposes. AtSign\'s search engine helps businesses search and export valuable business contact info data into a spreadsheet. This contact information empowers sales teams and marketing professionals. I was tasked with developing their new website.',
      image: '/assets/atsign.png',
      url: 'https://atsign.co',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery']
    },
    {
      title: 'HealthGPS Website Redesign',
      description: 'HealthGPS is a full service “Medical Tourism” firm. Our focus is on helping upscale patients receive medical and/or wellness services in foreign countries through the tie-up with world-class medical hospitals, clinics, doctors and Insurance providers in India, Russia, Malaysia, Thailand, Singapore, UAE, Greece & Germany. Our aim is to help patients reach out to quality and affordable healthcare anywhere in the world. I was tasked with developing their new website in Angular 7 and improving their existing backend APIs in NodeJS and MongoDB to support new search features and blog feature.',
      image: '/assets/healthgps.png',
      url: 'https://healthgps.com',
      tags: ['Angular', 'NodeJS', 'MongoDB', 'AWS EC2', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery']
    },
    {
      title: 'Greater Commons',
      description: 'Greater Commons is a platform where everyone can learn and everyone can teach. Greater Commons brings students and teachers together. This project is one of the biggest projects I have worked on so far and really helped me to grow my skills by a great extent. I worked on parts of both Frontend and Backend and also in a few other areas.',
      image: '/assets/greatercommons.png',
      url: 'https://greatercommons.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'Golang', 'Google Cloud Platform', 'Microservices']
    },
    {
      title: 'Cactus',
      description: 'One of my early Upwork projects that helped me build a solid Upwork profile, this project involved updating a SquareSpace website with custom layouts, animations, and features to make it matching with the designs provided. This was also my first major project on SquareSpace.',
      image: '/assets/cactus.png',
      url: 'https://cactus.is',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SquareSpace']
    },
    {
      title: 'AdSpark',
      description: 'I was hired to design and develop a landing page for a Russia-based Digital Signage Agency. The landing page that is currently live contains placeholder contents for now.',
      image: '/assets/adspark.png',
      url: 'https://adspark.ru',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    },
    {
      title: 'Compute Vision - Similar Logo Finder',
      description: 'This project challenged my algorithm development skills in vanilla JavaScript. I was initially hired to build a subpage of this website that can be found at <a href="http://compute.vision/brands/colorpicker.html" target="_blank">here</a>. I built all the functionality on that page including the colorpicker and the test tubes with vanilla JS. I was then asked to revamp the whole website frontend and reduce overall size of the files to improve the loading speeds.',
      image: '/assets/compute-vision.png',
      url: 'http://compute.vision/brands/index.html',
      tags: ['HTML', 'CSS', 'JavaScript', 'BulmaCSS', 'KnockoutJS', 'Gulp']
    },
    {
      title: 'Gamoloco',
      description: 'Gamoloco is a platform where you can find scoreboards based on twitch streams data for gaming streams. You can see yearly, monthly, daily or weekly scoreboards for each category. Their scoreboard generation software, which was written in Golang and MongoDB, stopped working for monthly and yearly scoreboards and I was hired to fix this and generate all the missing scoreboards.',
      image: '/assets/gamoloco.png',
      url: 'https://gamoloco.com',
      tags: ['Golang', 'MongoDB']
    },
    {
      title: 'Adnut',
      description: 'I was hired to work on their WordPress based website to fix the layout and make it responsive so that it looks good on desktop as well as other devices. This was my first project with WordPress',
      image: '/assets/adnut.png',
      url: 'https://adnut.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress']
    },
    {
      title: 'Survey Form Redesign On Concerto Platform',
      description: 'I was tasked with redesigning and developing a survey form for a company to make it look sleek and modern. The form is based on the Concerto platform and the app was built on Angular 1 + CSS. Since this project is under NDA, All confidential information has been removed.',
      image: '/assets/concerto.png',
      url: '',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular 1', 'Concerto']
    },
    {
      title: 'Red Contender',
      description: 'Initially starting as a jQuery project to fix existing website, I suggested the client that building it from ground up and with Angular will be much easier and better both functionality-wise and maintainability-wise. The client agreed and this turned out to be my only Angular project which is not under NDA and can be shared on my portfolio. This is a very basic Angular 5 app.',
      image: '/assets/redcontender.png',
      url: 'http://redcontentender.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular 5', 'BulmaCSS']
    },
    {
      title: 'Sample Angular 6 App',
      description: 'Since I don\'t have much to show for my Angular, I created a sample app to show my Angular skills. This is an Angular 6 project which uses Google Maps API to show a list of nearby cafes. You can select a date and time to see only the cafes that are open at that date and time. It uses most of the concepts used in javascript apps such as unit testing, async await, promises, observables, services, etc. You can find the source code <a href="https://github.com/anshap1719/test-proj/" target="_blank">here</a>',
      image: '/assets/sample-app.png',
      url: 'https://anshap1719.github.io/test-proj/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Angular 6', 'Google Maps API']
    },
  ];

  constructor() { }
}
