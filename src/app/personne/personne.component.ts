import { Component, OnInit } from '@angular/core'
import { PersonneService } from '../services/personne.service'
import { Personne } from '../classes/personne'

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne> = new Array<Personne>()
  // constructor(private personneService:PersonneService) {
  //   this.personnes = this.personneService.getAll()
  //   }

  constructor(private personneService: PersonneService) {
    this.personneService.getAll().subscribe(res => {
    this.personnes = res;
    });
    }


    // ajouterPersonne() {
    //   this.personneService.addPerson(this.personne).subscribe(res => {
    //   this.personneService.getAll().subscribe(result => {
    //   this.personnes = result;
    //   });
    //   });
    //   }
    ngOnInit() { }
    }
