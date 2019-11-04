import {Component, OnInit, HostListener, Input, Output, EventEmitter} from '@angular/core';
import AOS from 'aos';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ContactService} from '../services/contact.service';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton = true;
  @Input() initContact = new Contact();
  @Output() submitedForm: EventEmitter<Contact> = new EventEmitter();

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private contactService: ContactService) {
  }

  register() {
    this.submitedForm.emit(this.contactForm.value);
    this.contactForm.reset();
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
