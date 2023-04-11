import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvellando';

  imageNames = {
    '/home': 'titolo-marvellando.png',
    '/films': 'titolo-film.png',
    // '/films/detail/': 'titolo-scheda_film.png',
    '/register': 'titolo-registrati.png',
    '/films/new-film': 'titolo-nuovo-film.png',
    defaultImageName: 'titolo-scheda_film.png'
  };

  constructor(private router: Router) { }

  getImageUrl(): string {
    const currentRoute = this.router.url;
    let imageName = this.imageNames[currentRoute];
    if (!imageName) {
      imageName = this.imageNames.defaultImageName;
    }
    return `assets/images/${imageName}`;
  }

}


