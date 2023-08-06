import { Component, OnInit } from '@angular/core';
import { Personne } from '../classes/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  personnes: Array<Personne> = [];
  nom: string = "";
  prenom: string = "";
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne() {
    this.personnes.push(new Personne(this.nom, this.prenom));
    this.nom = "";
    this.prenom = "";
    this.submitted = true ;
    }
}
