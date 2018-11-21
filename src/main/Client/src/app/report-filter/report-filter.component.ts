import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'gov-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.css']
})
export class ReportFilterComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  public showDialog(idModal: string){
    $('#' + idModal).modal();
  }

}
