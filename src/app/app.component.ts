import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvellando';

  imageNames = {
    '/home': 'titolo-marvellando.png',
    '/films': 'titolo-film.png'
  };

  constructor(private router: Router) { }

  getImageUrl(): string {
    const currentRoute = this.router.url;
    const imageName = this.imageNames[currentRoute];
    return `assets/images/${imageName}`;
  }

}


