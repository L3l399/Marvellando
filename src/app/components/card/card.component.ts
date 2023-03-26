import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  films = [
    {
      id:  1,
      titolo: 'Thunderbolts',
      label: 'I Thunderbolts di Marvel Studios arriveranno al cinema il 26 luglio 2024.',
      img: 'https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_01.jpg'
    },
    {
      id:  2,
      titolo:'The Marvels',
      label: 'The Marvels di Marvel studio arriveranno al cinema il 10 novembre 2023',
      img: 'https://cdn.marvel.com/content/1x/themarvels_lob_crd_02.jpg',
    },
    {
      id:  3,
      titolo:'Deadpool 3',
      label: "Deadpool 3 di Marvel studio arriverá al cinema l' 8 novembre 2024",
      img: 'https://cdn.marvel.com/content/1x/deadpool3_lob_crd_01.jpg',
    },
    {
      id:  4,
      titolo:'Guardiani della Galassia 3',
      label: 'i Guardiani della Galassia 3 di Marvel studio arriveranno al cinema il 5 maggio 2023',
      img: 'https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg'
    },
    {
      id:  5,
      titolo:'I Fantastici 4',
      label: 'I Fantastici 4 di Marvel studio arriveranno al cinema il 14 febbraio 2025',
      img: 'https://cdn.marvel.com/content/1x/fantasticfour_lob_crd_01_0.jpg'
    }
  ]

}
