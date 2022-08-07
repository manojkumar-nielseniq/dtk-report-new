import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  
  @Output('ChangeIncome')
  changeIncome: EventEmitter<{incomeType: string, buyingType: string, manufacturers: string}> = new EventEmitter<{incomeType: string, buyingType: string, manufacturers: string}>();
  
  
  income:string[] = ["Household Income", "Industry Income", "Commercial Income"];
  selectedIncome:string = this.income[0];

  // this.changeIncome.emit(this.selectedIncome);

  purchasedItems:string[] = ["Buying Households", "Buying Appliances"];
  selectedPurchased:string = this.purchasedItems[0];

  Manufacturers:string[] = ["4 PG manufacturer", "2 PG manufacturer"];
  selectedManufacturer:string = this.Manufacturers[0];

  


  constructor() { }

  ngOnInit(): void {
    this.onChange()
  }

  onChange() {
    this.changeIncome.emit({incomeType: this.selectedIncome, buyingType: this.selectedPurchased, manufacturers: this.selectedManufacturer});
  }

}
