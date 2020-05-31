import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../shared/models/card';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  @Input() initCard = new Card();
  @Output() submitedForm: EventEmitter<Card> = new EventEmitter();

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
      titre: [this.initCard.titre, Validators.compose([Validators.required])],
      descriptionCourte: [this.initCard.descriptionCourte, Validators.required],
      descriptionLongue: [this.initCard.descriptionLongue, Validators.required],
      image: [this.initCard.image],
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
      if (img.width <= 400 && img.height <= 500) {
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
        alert(`L'image sélectionnée est trop grande: ${img.width} x ${img.height} => 500px * 400px demandé`);
        return;
      }
    };
  }
}
