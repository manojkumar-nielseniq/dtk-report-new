import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { StackedChart } from '../StackedChart';

@Component({
  selector: 'app-chart-overview',
  templateUrl: './chart-overview.component.html',
  styleUrls: ['./chart-overview.component.css'],
})
export class ChartOverviewComponent implements OnInit {
  @Input() dataOverview: StackedChart[] = [];

  isNan(value: string) {
    return isNaN(parseInt(value));
  }

  total: number = 0;
  dataChange: any = [];

  constructor() {}

  overviewValues: { value: number; color: string; name: string }[] = [
    {
      value: 0,
      color: '#00D7D2',
      name: 'MH',
    },
    {
      value: 0,
      color: '#313c53',
      name: 'DL',
    },
    {
      value: 0,
      color: '#7BD500',
      name: 'RJ',
    },
  ]; //['#00D7D2', '#313c53', '#7BD500'];
  ngOnInit(): void {}

  res: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.overviewValues = [
      {
        value: 0,
        color: '#00D7D2',
        name: 'MH',
      },
      {
        value: 0,
        color: '#313c53',
        name: 'DL',
      },
      {
        value: 0,
        color: '#7BD500',
        name: 'RJ',
      },
    ];

    console.log('DATA OVERVIEW: ', changes['dataOverview']);

    this.dataChange = changes['dataOverview'];

    for (const item of this.dataChange.currentValue) {
      // this.res = Object.keys(item);
      // this.overviewValues[0]['name'] = this.res.find((d) => d === 'MH') || '';
      // this.overviewValues[1]['name'] = this.res.find((d) => d === 'DL') || '';
      // this.overviewValues[2]['name'] = this.res.find((d) => d === 'RJ') || '';

      this.overviewValues[0]['value'] += item['MH'];
      this.overviewValues[1]['value'] += item['DL'];
      this.overviewValues[2]['value'] += item['RJ'];
    }

    this.total =
      this.overviewValues[0]['value'] +
      this.overviewValues[1]['value'] +
      this.overviewValues[2]['value'];
  }
}
