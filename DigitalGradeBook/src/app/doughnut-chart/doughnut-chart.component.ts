import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {
  public chart: any;

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Students','Pass','Fail', ],
	       datasets: [{
    label: 'Count:',
    data: [20,14,6],
    backgroundColor: [
      'orangered',
      'lightgreen',
      'red',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
  ngOnInit(): void {
    this.createChart();
  }

}
