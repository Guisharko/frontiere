import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarrouselComponent} from './carrousel/carrousel.component';
import {CardComponent} from './card/card.component';
import {FooterComponent} from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddContactComponent} from './add-contact/add-contact/add-contact.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { TemplateComponent } from './template/template.component';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    CardComponent,
    FooterComponent,
    AddContactComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  exports: [
    AppComponent,
    CardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
