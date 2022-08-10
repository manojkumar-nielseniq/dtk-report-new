import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  @Input() buyingType:string = "";
  @Input() manufacturerName:string = "";
  @Input() dataType:string = "";
  @Input() incomeData = {};

  incomeNum:number = 0;
  companyName:string = "";

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
    // this.incomeNum = this.incomeData.income;
    // console.log(this.incomeData);
    
    
  }
=======
    
  }
  MAX_NUM = Number.MAX_VALUE;
>>>>>>> 4d8dd56fd230044da934b20a80fc9ec8462bd5e3

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log("CHANGES: ", changes);
    this.incomeNum = changes?.['incomeData']?.currentValue.income;
    this.companyName = changes?.['incomeData']?.currentValue.company;
    // this.comapanyName = changes?.['incomeData']?.
    
  }

}
