import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Carousel} from '../../../shared/models/carousel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-form-carousel',
  templateUrl: './form-carousel.component.html',
  styleUrls: ['./form-carousel.component.scss']
})
export class FormCarouselComponent implements OnInit {


  @Input() initCarousel = new Carousel();
  @Output() submitedForm: EventEmitter<Carousel> = new EventEmitter();

  myForm: FormGroup;
  title = 'cloudsSorage';
  fbv;
  downloadURL: Observable<string>;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.createForm();
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      image: [this.initCarousel.image],
    });
  }

  register() {
    this.myForm.value.url = this.fbv;
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset();
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    const n = Date.now();
    const img = new Image();
    img.src = window.URL.createObjectURL(event.target.files[0]);
    img.onload = () => {
      if (img.width <= 1500 && img.height <= 900) {
        const filePath = `images/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`images/${n}`, file);
        task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              this.downloadURL = fileRef.getDownloadURL();
              this.downloadURL.subscribe(url => {
                if (url) {
                  this.fbv = url;
                }
                console.log(this.fbv);
              });
            })
          )
          .subscribe(url => {
            if (url) {
              console.log(url);
            }
          });
      } else {
        alert(`L'image sélectionnée est trop grande: ${img.width} x ${img.height} => 1500px * 900px demandé`);
        return;
      }
    };
  }
}
