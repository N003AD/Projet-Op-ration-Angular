import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-element',
  templateUrl: './first-element.component.html',
  styleUrls: ['./first-element.component.css']
})

export class FirstElementComponent implements OnInit {

  tab: number[] = [1, 2, 11, 14, 17]; // Remplacez ce tableau par le vôtre.

  getMessage(number: number): string {
    if (number >= 0 && number <= 9) {
      return 'échec';
    } else if (number >= 10 && number <= 13) {
      return 'moyen';
    } else if (number >= 14 && number <= 16) {
      return 'bien';
    } else {
      return 'très bien';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
