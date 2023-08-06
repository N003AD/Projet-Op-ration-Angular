import { Injectable } from '@angular/core';
import { Personne } from '../classes/personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // personnes:Array<Personne> = new Array<Personne>();
  url:string = "http://localhost:5555/personnes/";
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
    getAll() {
      return this.http.get<Array<Personne>>(this.url);
      }
      addPerson(p: Personne) {
      return this.http.post(this.url, p);
      }
    }
