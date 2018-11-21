import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";
import {CommonReports} from "../common-reports";

@Component({
  selector: 'gov-report-screen-notafiscal',
  templateUrl: './report-screen-notafiscal.component.html',
  styleUrls: ['./report-screen-notafiscal.component.css']
})
export class ReportScreenNotafiscalComponent extends CommonReports implements OnInit {

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
