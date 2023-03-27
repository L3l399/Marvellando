import { Component } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    {id:  1,
      label: 'Spaghetti  asdhfo',
    },
    {id:  2,
      label: 'Tagliata di manzo',
    },
    {id:  3,
      label: 'Tiramisú',
    },
    {id:  4,
      label: 'Tiramisú',
    },
    {id:  5,
      label: 'Tiramisú',
    },
    {id:  6,
      label: 'Tiramisú',
    },
    {id:  7,
      label: 'Tiramisú',
    }
  ]
  percorso = "../assets/images/carousel-";

}
