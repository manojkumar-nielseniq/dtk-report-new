import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  cards: number[] = [1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}