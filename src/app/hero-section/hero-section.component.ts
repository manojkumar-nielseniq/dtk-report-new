import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  
  
  income:string[] = ["Household Income", "Industry Income", "Commercial Income"];
  selectedIncome:string = this.income[0];

  purchasedItems:string[] = ["Buying Households", "Buying Appliances"];
  selectedPurchased:string = this.purchasedItems[0];

  Manufacturers:string[] = ["4 PG Manufacturer", "2 PG Manufacturer"];
  selectedManufacturer:string = this.Manufacturers[0];

  


  constructor() { }

  ngOnInit(): void {
  }

}
