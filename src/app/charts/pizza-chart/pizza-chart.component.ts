import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pizza-chart',
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.css']
})

export class PizzaChartComponent {
  chart: any;

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Laravel', 'Node.js', 'React', 'Angular'],
        datasets: [{
          data: [12, 9, 6, 4],
          backgroundColor: [' #ef5743', '#6fbcb7', '#c1d8d0', '#8B0000'],
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
