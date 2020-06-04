import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faChevronDown, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import {Observable} from 'rxjs';
import {Parametres} from '../shared/models/parametres';
import {ParametresService} from '../admin/services/parametres.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faChevronDown = faChevronDown;
  faPhone = faMobileAlt;
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
