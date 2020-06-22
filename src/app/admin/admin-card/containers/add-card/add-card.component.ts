import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  addCard(event) {
    this.cardService.add(event).then(() => {
      console.log(event);
      this.router.navigate(['/card', 'list']);
    });
  }
}
