import {Component, OnInit} from '@angular/core';
import {CommonReports} from "../common-reports";
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";
import {Report} from "../../shared/report";
import {FilterData, WhereClause} from "../../components/interfaces";
import {DataType, MatchType} from "../../utils/utils";

@Component({
  selector: 'gov-report-screen-tributacao',
  templateUrl: './report-screen-tributacao.component.html',
  styleUrls: ['./report-screen-tributacao.component.css']
})
export class ReportScreenTributacaoComponent extends CommonReports implements OnInit{

  constructor(protected router?: Router, public sharedService?: SharedService){
    super(router, sharedService)
  }

  ngOnInit(){
    super.ngOnInit();
    this.setReportList();
  }


  setReportList(): void {
    this.reports = <Report[]>[{label: "Listagem de Contribuinte",
                               nome: "ListagemContribuinte",
                               needFilter: false,
                               filterData: <FilterData>{limit: 100,
                                                        order: 'NJ.nome, CT.nome',
                                                        whereClauses: <WhereClause[]>[{table: "CT",
                                                                                       name: 'cnpjcpf',
                                                                                       dataTypeName: DataType.STRING,
                                                                                       matchType: MatchType.NOT_EQUAL,
                                                                                       iniValue: '-9'}, {}]}
      }],
      [{label: "Listagem de Empresa por Atividade", nome: "ListagemEmpresaAtividade", filterData: <FilterData>{}}];
  }
}
