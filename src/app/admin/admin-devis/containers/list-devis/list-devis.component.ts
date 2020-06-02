import {Component, OnInit} from '@angular/core';
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
    ['Date',
      'Nom',
      'Adresse',
      'Mail',
      'Téléphone',
      'Message',
    'Etat du message'];

  constructor(
    private devisService: ContactService,
  ) {
    this.collection$ = this.devisService.collection;
  }

  ngOnInit() {
  }

  changeStatus(contact: Contact, event: any) {
    this.devisService.updateStatus(contact, event.target.value);
  }
}
