import {Component, OnInit} from '@angular/core';
import {Card} from '../../../../shared/models/card';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AdminCardService} from '../../services/admin-card.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  collection$: Observable<Card[]>;
  cardHeaders =
    ['Titre',
      'Description Courte',
      'Description Longue',
      'Image',
      'Actions'];

  constructor(
    private adminCardService: AdminCardService,
    private router: Router
  ) {
    this.collection$ = this.adminCardService.collection;

  }

  ngOnInit() {
  }

  edit(card: Card) {
    this.router.navigate(['/card', 'edit', card.id]);
  }

  delete(card: Card) {
    this.adminCardService.delete(card);
  }

}
