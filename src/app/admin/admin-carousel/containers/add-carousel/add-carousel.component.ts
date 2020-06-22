import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminCarouselService} from '../../services/admin-carousel.service';

@Component({
  selector: 'app-add-carousel',
  templateUrl: './add-carousel.component.html',
  styleUrls: ['./add-carousel.component.scss']
})
export class AddCarouselComponent implements OnInit {

  constructor(
    private carouselService: AdminCarouselService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  addCarousel(event) {
    this.carouselService.add(event).then(() => {
      console.log(event);
      this.router.navigate(['/carousel', 'list']);
    });
  }

}
