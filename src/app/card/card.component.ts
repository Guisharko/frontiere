import {Component, OnInit} from '@angular/core';
import AOS from 'aos';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminCardService} from '../admin/admin-card/services/admin-card.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Card} from '../shared/models/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  collection$: Observable<Card[]>;
  constructor(private modalService: NgbModal,
              private adminCardService: AdminCardService,
              private router: Router) {
    this.collection$ = this.adminCardService.collection;
  }

  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
  }

  openLg(content) {
    this.modalService.open(content, {size: 'lg'});
  }
}
