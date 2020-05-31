import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ContactService} from '../../../../services/contact.service';
import {Contact} from '../../../../shared/models/contact';

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss']
})
export class ListDevisComponent implements OnInit {

  collection$: Observable<Contact[]>;
  devisHeaders =
    [  'Date',
      'Nom',
      'Adresse',
      'Téléphone',
      'Mail',
      'Message'];

  constructor(
    private devisService: ContactService,
  ) {
    this.collection$ = this.devisService.collection;
  }
  ngOnInit() {
  }
}
