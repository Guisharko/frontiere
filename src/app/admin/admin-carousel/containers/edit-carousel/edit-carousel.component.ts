import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Carousel} from '../../../../shared/models/carousel';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {AdminCarouselService} from '../../services/admin-carousel.service';

@Component({
  selector: 'app-edit-carousel',
  templateUrl: './edit-carousel.component.html',
  styleUrls: ['./edit-carousel.component.scss']
})
export class EditCarouselComponent implements OnInit {
  carousel$: Observable<Carousel>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private carouselService: AdminCarouselService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.carousel$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = params.get('id');
        return this.carouselService.getCarousel(this.id);
      })
    );
  }

  editCarousel(carousel) {
    this.carouselService.update(this.id, carousel).then(() => {
      this.router.navigate(['/carousel', 'list']);
    });
  }
}
