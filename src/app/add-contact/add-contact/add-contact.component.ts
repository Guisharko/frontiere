import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  providers: []
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton = true;
  alreadySubmit = false;
  @Input() initContact = new Contact();
  @Output() submitedForm: EventEmitter<Contact> = new EventEmitter();

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
    if (this.alreadySubmit === true) {
      this.disabledSubmitButton = true;
    }
  }

  constructor(private contactService: ContactService, private router: Router, private fb: FormBuilder) {
  }

  register() {
    this.submitedForm.emit(this.contactForm.value);
    this.contactService.add(this.contactForm.value);
    this.contactForm.reset();
    this.alreadySubmit = true;
  }

  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      contactFormName: [this.initContact.nom, Validators.required],
      contactFormAdresse: [this.initContact.adresse, Validators.required],
      contactFormPhone: [this.initContact.phone, Validators.required],
      contactFormEmail: [this.initContact.email, Validators.compose([Validators.required, Validators.email])],
      contactFormMessage: [this.initContact.message, Validators.required],
    });
  }
}
