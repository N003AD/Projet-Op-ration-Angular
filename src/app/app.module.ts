import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstElementComponent } from './first-element/first-element.component';
import { AdresseComponent } from './adresse/adresse.component';
import { PersonneComponent } from './personne/personne.component';
import { RouterModule } from '@angular/router';
import { ObjectToArrayPipe } from './object-to-array.pipe';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstElementComponent,
    AdresseComponent,
    PersonneComponent,
    ObjectToArrayPipe,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'personne', component: PersonneComponent },
      { path: 'adresse', component: AdresseComponent },
      { path: 'formu', component: FormulaireComponent }
    ], { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
