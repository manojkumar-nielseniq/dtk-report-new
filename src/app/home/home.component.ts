import { Component, SimpleChanges } from '@angular/core';
import { StackedChart } from '../StackedChart';

//import chartData from '../ChartData.json';
import { DataServiceService } from '../data-service/data-service.service';

//const stackedChart2: StackedChart[] = [
//   {
//     Less30: 217,
//     Gt30Le60: 132,
//     Gt60le90: 60,
//     Gt90: 86,
//     date: '2010',
//     buyingType: 'Buying Households',
//     incomeType: 'Household Income',
//     manufacturers: '2 PG manufacturer',
//   },
//   {
//     Less30: 180,
//     Gt30Le60: 133,
//     Gt60le90: 85,
//     Gt90: 85,
//     date: '2011',
//     buyingType: 'Buying Households',
//     incomeType: 'Commercial Income',
//     manufacturers: '4 PG manufacturer',
//   },
//   {
//     Less30: 214,
//     Gt30Le60: 99,
//     Gt60le90: 61,
//     Gt90: 84,
//     date: '2012',
//     buyingType: 'Buying Appliances',
//     incomeType: 'Industry Income',
//     manufacturers: '4 PG manufacturer',
//   },
//   {
//     Less30: 196,
//     Gt30Le60: 143,
//     Gt60le90: 56,
//     Gt90: 96,
//     date: '2013',
//     buyingType: 'Buying Households',
//     incomeType: 'Household Income',
//     manufacturers: '4 PG manufacturer',
//   },
// ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private dataService: DataServiceService) {}

  //stackedChart: StackedChart[] = [];

  Data: StackedChart[] = []
  // [{
  //   _id: null,
  //   Less30: 12,
  // Gt30Le60: 12,
  // Gt60le90: 12,
  // Gt90: 12,
  // date: "string",
  // buyingType: "string", //string
  // incomeType: "string", 
  // manufacturers: "string"
  // }, ];

  cards:string[] = ["Highest", "Lowest"];

  selectedIncome: string = 'Household Income';
  selectedBuying: string = 'Buying Households';
  selectedManufacturer: string = '4 PG manufacturer';

  // changeIncome(dataIncome: string  = 'Household Income', dataBuying: string = 'Buying Households', dataMfr:string = '4 PG manufacturer') {

  changeIncome(event: {incomeType: string, buyingType: string, manufacturers: string}) {
    this.selectedIncome = event["incomeType"];
    this.selectedBuying = event["buyingType"];
    this.selectedManufacturer = event["manufacturers"];
    this.dataService.chartDataResponse(this.selectedIncome, this.selectedBuying, this.selectedManufacturer)
    .subscribe(data => this.changeChartData(data))//
    
  }

  // changeBuying(data: any) {
  //   this.selectedBuying = data;
  //   this.changeChartData();
  // }
  // changeManufacturer(data: any) {
  //   this.selectedManufacturer = data;

  //   this.changeChartData();
  // }

  

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   //this.changeChartData();
  // }

  //filterdData: any = [];

  changeChartData(data: any) {
    // if(this.selectedIncome === "Industry Income") {
    // console.log("INCOME: ", this.selectedIncome);
    // console.log("Data: ", this.Data);
    // this.filterdData = this.stackedChart.filter(
    //   (d: any) => d.incomeType === this.selectedIncome
    // );
    // this.filterdData = this.filterdData.filter(
    //   (d: any) => d.buyingType === this.selectedBuying
    // );

    // this.filterdData = this.filterdData.filter(
    //   (d: any) => d.manufacturers === this.selectedManufacturer
    // );
    //console.log(data["0"])
    // let arrayData = [];
    // for(let i in data){
    //   arrayData.push(data[i])
    // }
    console.log("AAAA  "+ JSON.stringify(this.Data))
    console.log(typeof(this.Data))
    this.Data = data;
    console.log("BBBB  "+ JSON.stringify(this.Data))
    console.log(typeof(this.Data))
    // } else {
    //   this.Data = this.stackedChart;
    // }
    // this.dataService.setData("CHANGED");
  }
}
