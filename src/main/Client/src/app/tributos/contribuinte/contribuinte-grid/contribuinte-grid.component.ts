import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData, WhereClause} from '../../../components/interfaces';
import {DataType, FieldSearch, MatchType} from '../../../utils/utils';
 import {CommonsGrid} from '../../../commons-grid'; 
import {Contribuinte} from '../contribuinte'; 
import {ContribuinteService} from '../contribuinte.service';
import {ReportGroup} from "../../../shared/report-group";
import {Report} from "../../../shared/report";
import {ReportFilterItem} from "../../../shared/report-filter-item";

@Component({ 
  selector: 'gov-contribuinte-grid', 
  templateUrl: './contribuinte-grid.component.html', 
  styleUrls: ['./contribuinte-grid.component.css']
}) 
export class ContribuinteGridComponent extends CommonsGrid<Contribuinte> implements OnInit {

  reports: ReportGroup[];

  constructor(apiService: ContribuinteService, router: Router) {
    super(apiService, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onNavigateClick(filterData: FilterData): void {
    this.loadByFilter(filterData);
  }

  getDefaultFilter(): FilterData {
    const filterData = super.getDefaultFilter();
    filterData.order = 'trb_contribuinte.nome';
    filterData.codigoField = 'cnpjcpf';
    return filterData;
  }

  getRowFilter(): FilterData {
    let filter= this.buildRowFilter('trb_contribuinte');
    filter.whereClauses[0].dataType='INTEGER';
    return filter;
  }

  getTableName(): string {
    return 'trb_contribuinte' ;
  }

  getFieldList(): FieldSearch[] {
    let retorno = [];
    retorno[0] = new FieldSearch('nome','nome','STRING');
    retorno[1] = new FieldSearch('rg','rg','STRING');
    retorno[2] = new FieldSearch('cnpjcpf','cnpjcpf','STRING');
    retorno[3] = new FieldSearch('nit','nit','STRING');
    retorno[4] = new FieldSearch('trb_naturezajuridica_id','trb_naturezajuridica_id','ENUM');
    retorno[5] = new FieldSearch('email','email','STRING');
    retorno[6] = new FieldSearch('datalancamento','datalancamento','DATE');
    retorno[7] = new FieldSearch('telefonefixo','telefonefixo','STRING');
    retorno[8] = new FieldSearch('telefonemovel','telefonemovel','STRING');
    retorno[9] = new FieldSearch('trb_nacionalidade_id','trb_nacionalidade_id','ENUM');
    retorno[10] = new FieldSearch('trb_cidade_id','trb_cidade_id','ENUM');
    retorno[11] = new FieldSearch('bairro','bairro','STRING');
    retorno[12] = new FieldSearch('cep','cep','STRING');
    retorno[13] = new FieldSearch('trb_tipologradouro_id','trb_tipologradouro_id','ENUM');
    retorno[14] = new FieldSearch('logradouro','logradouro','STRING');
    retorno[15] = new FieldSearch('numero','numero','STRING');
    return retorno;
  }

  getReportList(): ReportGroup[] {
     this.reports = new Array();

     /*REPORT GROUP GERAL*/
     let reportGroupDefault: ReportGroup = <ReportGroup>{ label: "Padrão", reportList: [] };

     let report1: Report = <Report>{
       nome: 'ListagemContribuinte',
       label: 'Listagem de Contribuintes',
       itemList: <ReportFilterItem[]> [
        {
          label: '',
          table: '',
          field: '',
          dataTypeName: ''
        }
       ],
       filterData: <FilterData>{
         //whereClauses: [],
         whereClauses: <WhereClause[]>[{dataType: DataType.LONG,
                                        matchType: MatchType.EQUALS,
                                        field: <FieldSearch>{label: "id",
                                                              name: "id",
                                                              type: "long"}
         }],
         limit: 1
       }
     };

      let report2: Report = <Report>{
      nome: 'CertidaoPrimeiroLancamento',
      label: 'Certidão Primeiro Lançamento',
      itemList: <ReportFilterItem[]> [
        {
          label: '',
          table: '',
          field: '',
          dataTypeName: ''
        }
      ],
      filterData: <FilterData>{
        //whereClauses: [],
        whereClauses: <WhereClause[]>[{dataType: DataType.LONG,
          matchType: MatchType.EQUALS,
          field: <FieldSearch>{label: "id",
            name: "id",
            type: "long"}
        }],
        limit: 1
      }
    };

     reportGroupDefault.reportList.push(report1);
     reportGroupDefault.reportList.push(report2);
     this.reports.push(reportGroupDefault);

    return this.reports;
  }
}
