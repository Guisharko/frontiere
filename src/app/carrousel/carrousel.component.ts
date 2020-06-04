import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faChevronDown, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Parametres} from '../shared/models/parametres';
import {ParametresService} from '../admin/services/parametres.service';


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
    'image_cover image4',
    'image_cover image7',
    'image_cover image8',
  ];
  collection$: Observable<Parametres[]>;

  constructor(config: NgbCarouselConfig,
              private parametresService: ParametresService) {
    this.collection$ = this.parametresService.collection;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
  }

}
