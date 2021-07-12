import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-teamoverview',
  templateUrl: './teamoverview.page.html',
  styleUrls: ['./teamoverview.page.scss'],
})
export class TeamoverviewPage  {

  @ViewChild('barCanvas') public barCanvas: ElementRef;
  @ViewChild('barcanvas', {static: true}) barcanvas;
  barChart: any;
  constructor() { }

  ionViewDidEnter(){
    this.barChartMethod();
  }

  barChartMethod(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [2017, 2018, 2019],
        datasets: [{
          barPercentage: 0.8,
          barThickness: 'flex',
          label: 'Type 1',
          stack: 'Base',
          backgroundColor: '#E1BA24',
          data: [10,20,30,40]
        },{
          barPercentage: 0.8,
          barThickness: 'flex',
          label: 'Type 2',
          stack: 'Sensitivity',
          backgroundColor: '#E1BA24',
          data: [13,26,35,40]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    // eslint-disable-next-line @typescript-eslint/semi
    });
  }

}
