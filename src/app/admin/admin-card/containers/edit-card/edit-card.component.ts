import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Card} from '../../../../shared/models/card';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {AdminCardService} from '../../services/admin-card.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  card$: Observable<Card>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private cardService: AdminCardService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.card$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = params.get('id');
        return this.cardService.getCard(this.id);
      })
    );
  }

  editCard(card) {
    this.cardService.update(this.id, card).then(() => {
      this.router.navigate(['/card', 'list']);
    });
  }
}
