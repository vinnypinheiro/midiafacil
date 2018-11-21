import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";
import {CommonReports} from "../common-reports";

@Component({
  selector: 'gov-report-screen-administracao',
  templateUrl: './report-screen-administracao.component.html',
  styleUrls: ['./report-screen-administracao.component.css']
})
export class ReportScreenAdministracaoComponent extends CommonReports implements OnInit {

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
