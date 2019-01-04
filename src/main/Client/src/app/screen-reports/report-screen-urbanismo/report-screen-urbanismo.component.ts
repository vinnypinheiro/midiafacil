import {Component, OnInit} from '@angular/core';
import {CommonReports} from "../common-reports";
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'gov-report-screen-urbanismo',
  templateUrl: './report-screen-urbanismo.component.html',
  styleUrls: ['./report-screen-urbanismo.component.css']
})
export class ReportScreenUrbanismoComponent extends CommonReports implements OnInit {

  constructor(protected router?: Router, public sharedService?: SharedService){
    super(router, sharedService)
  }

  ngOnInit(){
    super.ngOnInit();
    this.setReportList();
  }

  setReportList(): void {
  }
}
