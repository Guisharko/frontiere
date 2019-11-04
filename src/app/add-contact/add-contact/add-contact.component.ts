import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  providers: [ ]
})
export class AddContactComponent implements OnInit {

  constructor( private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  addContact(event: Contact) {
    this.contactService.add(event).then( () => {
      this.router.navigate(['/#contact']);
    });
  }
}
