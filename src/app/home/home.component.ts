import { Component, SimpleChanges } from '@angular/core';
import { StackedChart } from '../StackedChart';

import chartData from '../ChartData.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  stackedChart: StackedChart[] = chartData;

  Data: StackedChart[] = [];
  filterdData: StackedChart[] = [];


  cards: string[] = ['Highest', 'Lowest'];

  // incomes: object = {"0": {company: "", maximum: 0}, "1": {company: "", minimum: 999999}};
  incomes = [
    { company: '', income: 0 },
    { company: '', income: Number.MAX_VALUE },
  ];
  incomesMan = [
    { company: '', income: 0 },
    { company: '', income: Number.MAX_VALUE },
  ];

  selectedIncome: string = 'Household Income';
  selectedBuying: string = 'Buying Households';
  selectedManufacturer: string = '4 PG manufacturer';

  changeIncome(data: any) {
    this.selectedIncome = data;
    this.changeChartData();
  }

  changeBuying(data: any) {
    this.selectedBuying = data;
    this.changeChartData();
  }
  changeManufacturer(data: any) {
    this.selectedManufacturer = data;

    this.changeChartData();
  }

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.changeChartData();
    
  }


  changeChartData() {
    this.incomes = [
      { company: '', income: 0 }, //For Maximum income
      { company: '', income: Number.MAX_VALUE }, //For minimum income
    ];
    this.incomesMan = [
      { company: '', income: 0 },
      { company: '', income: Number.MAX_VALUE },
    ];

    this.filterdData = this.stackedChart.filter(
      (d: any) => d.incomeType === this.selectedIncome
    );
    this.filterdData = this.filterdData.filter(
      (d: any) => d.buyingType === this.selectedBuying
    );



    //First two cards max & min income goes here
    this.filterdData.map((data) => {
      if (data.income > this.incomes[0].income) {
        this.incomes[0].income = data.income;
        this.incomes[0].company = data.company;
      }
      if (data.income < this.incomes[1].income) {
        this.incomes[1].income = data.income;
        this.incomes[1].company = data.company;
      }
    });
    // this.incomes.push(this.maximum, this.minimum);
    // console.log("*****INCOMES*****",this.incomes);



    this.filterdData = this.filterdData.filter(
      (d: any) => d.manufacturers === this.selectedManufacturer
    );

    //Last two cards max & min income goes here
    this.filterdData.map((data) => {
      if (data.income > this.incomesMan[0].income) {
        this.incomesMan[0].income = data.income;
        this.incomesMan[0].company = data.company;
      }

      if (data.income < this.incomesMan[1].income) {
        this.incomesMan[1].income = data.income;
        this.incomesMan[1].company = data.company;
      }
    });

    // this.incomesMan.push(this.maximumMan, this.minimumMan);

    // console.log("MAXIMUM VALUES: ", this.maximum);
    // console.log("Minimum VALUES: ", this.minimum);
    // console.log("MAXIMUMman VALUES: ", this.maximumMan);
    // console.log("Minimumman VALUES: ", this.minimumMan);

    // console.log("FILTERed: ", this.filterdData);

    this.Data = this.filterdData;
    // } else {
    //   this.Data = this.stackedChart;
    // }
    // this.dataService.setData("CHANGED");
  }
}
