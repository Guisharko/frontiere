import {Component, OnInit, HostListener} from '@angular/core';
import AOS from 'aos';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


  contactForm: FormGroup;
  disabledSubmitButton = true;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {

    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormAdresse: ['', Validators.required],
      contactFormPhone: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
      contactFormMessage: ['', Validators.required],
    });
  }

  onSubmit() {
    this.saveEmailsToServer();

    console.log(this.contactForm);
  }


  ngOnInit() {
    AOS.init({
      duration: 2000,
      delay: 1200,
    });
  }

  saveEmailsToServer() {
    this.httpClient
      .post('https://frontiere-elagage.firebaseio.com/', this.contactForm.value)
      .subscribe(
        () => {
          console.log('Email envoyé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
