import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderFormComponent } from './header-form/header-form.component';
import { FooterComponent } from './footer/footer.component';
import { ModalConnexionComponent } from './modal-connexion/modal-connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CardTripComponent } from './card-trip/card-trip.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderFormComponent,
    FooterComponent,
    ModalConnexionComponent,
    InscriptionComponent,
    CardTripComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
