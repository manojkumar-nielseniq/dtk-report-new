import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { StackedChart } from '../StackedChart';

@Component({
  selector: 'app-chart-overview',
  templateUrl: './chart-overview.component.html',
  styleUrls: ['./chart-overview.component.css']
})
export class ChartOverviewComponent implements OnInit {

  @Input() dataOverview: StackedChart[] = []
  
  // less30: number = 0;
  // gt30Le60: number = 0;
  // gt60le90: number = 0;
  // gt90: number = 0;
  total: number = 0;
  dataChange: any = [];
  constructor() { }
  overviewValues: {"value": number, "color": string}[] = [{
    "value": 0,
    "color": '#00D7D2',
  },{
    "value": 0,
    "color": '#313c53',
  },{
    "value": 0,
    "color": '#7BD500',
  }]//['#00D7D2', '#313c53', '#7BD500'];
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) {

    console.log("DATA OVERVIEW: ", changes['dataOverview']);
    

    this.dataChange = changes['dataOverview'];
    for(let i in this.dataChange.currentValue){
      console.log("ASD "+ this.overviewValues[0]["value"])
      this.overviewValues[0]["value"] += this.dataChange.currentValue[i]["less100"]
      this.overviewValues[1]["value"] += this.dataChange.currentValue[i]["huntwohun"]
      this.overviewValues[2]["value"] += this.dataChange.currentValue[i]["twohunthreehun"]
    }
    this.total = this.overviewValues[0]["value"] +
                 this.overviewValues[1]["value"] +
                 this.overviewValues[2]["value"]  
  }

}