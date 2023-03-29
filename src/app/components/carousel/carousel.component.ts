import { Component } from '@angular/core';
// import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
// import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    {id:  1,
      label: '',
    },
    {id:  2,
      label: '',
    },
    {id:  3,
      label: '',
    },
    {id:  4,
      label: '',
    },
    {id:  5,
      label: '',
    },
    {id:  6,
      label: '',
    },
    {id:  7,
      label: '',
    }
  ]
  percorso = "../assets/images/carousel-";

}
