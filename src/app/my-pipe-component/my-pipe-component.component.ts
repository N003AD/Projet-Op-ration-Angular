import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe-component',
  templateUrl: './my-pipe-component.component.html',
  styleUrls: ['./my-pipe-component.component.css']
})
export class MyPipeComponent implements OnInit {

  myObject = {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
