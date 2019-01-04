import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";
import {CommonReports} from "../common-reports";

@Component({
  selector: 'gov-report-screen-transporte',
  templateUrl: './report-screen-transporte.component.html',
  styleUrls: ['./report-screen-transporte.component.css']
})
export class ReportScreenTransporteComponent extends CommonReports implements OnInit {

  constructor(protected router?: Router, public sharedService?: SharedService){
    super(router, sharedService)
  }

  ngOnInit(){
    super.ngOnInit();
    this.setReportList();
  }

  setReportList(): void{

  }

}
