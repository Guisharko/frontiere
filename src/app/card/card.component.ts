import {Component, OnInit} from '@angular/core';
import AOS from 'aos';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() {
  }
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  public isCollapsed = true;

  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
  }
}
