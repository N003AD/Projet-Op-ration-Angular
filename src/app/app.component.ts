import { Component } from '@angular/core';
import { Personne } from './classes/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'repAngularLink';
  personne: Personne;
  myObject:any;


  constructor() {
  this.personne = new Personne ("Wick", "John");
  }
}
