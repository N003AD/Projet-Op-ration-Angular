import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // personnes:Array<Personne> = new Array<Personne>();
  // url:string = "http://localhost:5555/personnes/";
  private apiUrl = 'http://localhost:36537/api/personnes';
  constructor(private http: HttpClient) {
    // this.personnes.push(new Personne ("wick","john"));
    // this.personnes.push(new Personne ("green","bob"));
    }
    // getAll(){
    // return this.personnes;
    // }
    // addPerson(p:Personne){
    // this.personnes.push(p);
    // }
    // getAll() {
    //   return this.http.get<Array<Personne>>(this.url);
    //   }
    //   addPerson(p: Personne) {
    //   return this.http.post(this.url, p);
    //   }

    getPersonnes(): Observable<Personne[]> {
      return this.http.get<Personne[]>(this.apiUrl);
    }

    supprimerPersonne(personneId: number): Observable<void> {
      const url = `${this.apiUrl}/${personneId}`;
      return this.http.delete<void>(url);
    }

    // Ajouter une méthode pour la mise à jour (update) de la personne
    // en utilisant la méthode HTTP "put" ou "patch" selon votre API

    }
