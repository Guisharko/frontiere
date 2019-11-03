import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { faChevronDown, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  faChevronDown = faChevronDown;
  faPhone = faMobileAlt;
  imagesBackground = [
    'image_cover image1',
    'image_cover image2',
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationIndicators = false;
  }
  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
  }

}
