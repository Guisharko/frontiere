import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Card} from '../../../../shared/models/card';
import {AdminCardService} from '../../services/admin-card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
  providers: []

})
export class AddCardComponent implements OnInit {

  constructor(
    private cardService: AdminCardService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  addCard(event: Card) {
    this.cardService.add(event).then(() => {
      this.router.navigate(['/cards', 'list']);
    });
  }

}
