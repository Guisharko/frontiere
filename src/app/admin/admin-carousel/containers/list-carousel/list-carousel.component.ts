import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Carousel} from '../../../../shared/models/carousel';
import {Router} from '@angular/router';
import {AdminCarouselService} from '../../services/admin-carousel.service';

@Component({
  selector: 'app-list-carousel',
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.scss']
})
export class ListCarouselComponent implements OnInit {
  collection$: Observable<Carousel[]>;
  carouselHeaders =
    [ 'Image',
      'Actions'];

  constructor(
    private adminCarouselService: AdminCarouselService,
    private router: Router
  ) {
    this.collection$ = this.adminCarouselService.collection;

  }

  ngOnInit() {
  }

  edit(carousel: Carousel) {
    this.router.navigate(['/carousel', 'edit', carousel.id]);
  }

  delete(carousel: Carousel) {
    this.adminCarouselService.delete(carousel);
  }
}
