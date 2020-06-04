import {Component, OnInit} from '@angular/core';
import {Parametres} from '../shared/models/parametres';
import {ParametresService} from './services/parametres.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  parametres$: Observable<Parametres>;
  id: 'Parametres';
  user;

  constructor(private parametresService: ParametresService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
  }
  ngOnInit() {
    this.parametres$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.parametresService.getParametres('Parametres');
      })
    );
  }

  editParametres(parametres) {
    this.parametresService.update('Parametres', parametres).then(() => {
      window.location.reload();
    });
  }
}
