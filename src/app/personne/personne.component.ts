import { Component, OnInit } from '@angular/core'
import { PersonneService } from '../services/personne.service'
import { Personne } from '../classes/personne'

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  // personnes: Array<Personne> = new Array<Personne>()
  // constructor(private personneService:PersonneService) {
  //   this.personnes = this.personneService.getAll()
  //   }
  personnes: Personne[] = [];
  constructor(private personneService: PersonneService) {
    // this.personneService.getAll().subscribe(res => {
    // this.personnes = res;
    // });
    }


    // ajouterPersonne() {
    //   this.personneService.addPerson(this.personne).subscribe(res => {
    //   this.personneService.getAll().subscribe(result => {
    //   this.personnes = result;
    //   });
    //   });
    //   }
    ngOnInit() {
      this.getPersonnes();
     }

      getPersonnes() {
    this.personneService.getPersonnes().subscribe((data: Personne[]) => {
      this.personnes = data;
    });
  }

  modifierPersonne(personne: Personne) {
    // Implémenter la logique pour ouvrir un formulaire de modification
    // et mettre à jour la personne dans la liste après la modification
  }

  supprimerPersonne(personneId: number) {
    this.personneService.supprimerPersonne(personneId).subscribe(() => {
      // Supprimer la personne de la liste après la suppression réussie
      // this.personnes = this.personnes.filter(p => p.id !== personneId);
    });
  }
    }
