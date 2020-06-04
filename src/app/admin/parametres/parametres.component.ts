import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Parametres} from '../../shared/models/parametres';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {
  @Input() initParametres = new Parametres();
  @Output() submitedForm: EventEmitter<Parametres> = new EventEmitter();
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.myForm.valueChanges.subscribe((data) => console.log(data));
  }

  createForm() {
    this.myForm = this.fb.group({
      nom1: [this.initParametres.nom1, Validators.compose([Validators.required])],
      nom2: [this.initParametres.nom2],
      slogan: [this.initParametres.slogan, Validators.required],
      phone: [this.initParametres.phone, Validators.required],
      facebook: [this.initParametres.facebook],
      youtube: [this.initParametres.youtube],
    });
  }

  register() {
    this.submitedForm.emit(this.myForm.value);
    this.myForm.reset();
  }

}

