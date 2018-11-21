import {Component, OnInit} from '@angular/core';
import {MainPageService} from "./main-page.service";

declare var $:any;
@Component({
  selector: 'gov-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private service: MainPageService) { }

  ngOnInit() {

    var data = this.service.getArrecadacaoTributos();
    this.getAreaGrafico1(data);
    this.getGrafico2();

  }

  getGrafico2(){
    var data = [{
      label: "IPTU",
      data: 21,
      color: "#d3d3d3",
    }, {
      label: "ISS",
      data: 3,
      color: "#bababa",
    }, {
      label: "TFF",
      data: 15,
      color: "#79d2c0",
    }, {
      label: "TAXA DE MERCADO",
      data: 52,
      color: "#1ab394",
    }];
    $.plot('#numeroDeParcelamentos', data, {
      series: {
        pie: {
          show: true
        }
      }
    });
  }

  getAreaGrafico1(data: any){

    var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
    var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

    var data1 = [
      { label: "Data 1", data: data, color: '#17a084'},
      { label: "Data 2", data: d2, color: '#127e68' }
    ];
    $.plot($("#flot-chart1"), data1, {
      xaxis: {
        tickDecimals: 0
      },
      series: {
        lines: {
          show: true,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 0.7
            }, {
              opacity: 0.7
            }]
          },
        },
        points: {
          width: 0.3,
          show: true
        },
      },
      grid: {
        show: true,
        borderWidth: 1
      },
      legend: {
        show: true,
      }
    });
  }

}
