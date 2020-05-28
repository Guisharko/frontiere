import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../../shared/models/card';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  @Input() initCard = new Card();
  @Output() submitedForm: EventEmitter<Card> = new EventEmitter();

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      titre: [this.initCard.titre, Validators.compose([Validators.required])],
      descriptionCourte: [this.initCard.descriptionCourte],
      descriptionLongue: [this.initCard.descriptionLongue, Validators.required],
      image: [this.initCard.image, Validators.required],
    });
  }

  register() {
    console.log(this.myForm.value);
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset();
  }
}
