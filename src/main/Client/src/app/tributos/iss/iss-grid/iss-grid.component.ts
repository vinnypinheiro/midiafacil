import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Iss} from '../iss'; 
import {IssService} from '../iss.service'; 

@Component({ 
  selector: 'gov-iss-grid', 
  templateUrl: './iss-grid.component.html', 
  //styleUrls: ['./iss-grid.component.css'] 
}) 
export class IssGridComponent extends CommonsGrid<Iss> implements OnInit { 

     constructor(apiService: IssService, router: Router) { 
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
         filterData.order = 'trb_iss.trb_referencia_id, trb_iss.tipoinscricao, trb_iss.datalancamento, trb_iss.ano, trb_iss.aliquota, trb_iss.aliquotareferencia, trb_iss.basecalculo, trb_iss.qtdparcela, trb_iss.valor, trb_iss.valorparcela, trb_iss.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_iss'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_iss' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[1] = new FieldSearch('tipoinscricao','tipoinscricao','STRING'); 
         retorno[2] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[3] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[4] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[5] = new FieldSearch('aliquotareferencia','aliquotareferencia','NUMBER'); 
         retorno[6] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[7] = new FieldSearch('qtdparcela','qtdparcela','NUMBER'); 
         retorno[8] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[9] = new FieldSearch('valorparcela','valorparcela','NUMBER'); 
         retorno[10] = new FieldSearch('numero','numero','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}