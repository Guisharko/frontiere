import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../../shared/models/contact';
import {ContactService} from '../../services/contact.service';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {AuthenticationService} from '../admin-login/services/authentication.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
  collection$: Observable<Contact[]>;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  notReadValue = 0;

  constructor(
    private devisService: ContactService, private authenticationService: AuthenticationService
  ) {
    this.collection$ = this.devisService.collection;
  }

  ngOnInit() {
    this.collection$.forEach(contact => {
        contact.forEach(value => {
          if (value.vue !== undefined) {
            if (!value.vue) {
              this.notReadValue++;
            }
          }
        });
      }
    );
  }
  logout() {
    this.authenticationService.SignOut();
  }

}
