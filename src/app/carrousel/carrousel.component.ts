import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faChevronDown, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Carousel} from '../shared/models/carousel';
import {AdminCarouselService} from '../admin/admin-carousel/services/admin-carousel.service';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  collection$: Observable<Carousel[]>;

  constructor(config: NgbCarouselConfig,
              private carouselService: AdminCarouselService) {
    this.collection$ = this.carouselService.collection;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
  }

}
