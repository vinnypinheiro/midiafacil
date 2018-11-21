import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Tff} from '../tff'; 
import {TffService} from '../tff.service'; 

@Component({ 
  selector: 'gov-tff-grid', 
  templateUrl: './tff-grid.component.html', 
  //styleUrls: ['./tff-grid.component.css'] 
}) 
export class TffGridComponent extends CommonsGrid<Tff> implements OnInit { 

     constructor(apiService: TffService, router: Router) { 
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
         filterData.order = 'trb_tff.trb_empresa_id, trb_tff.trb_porteempresa_id, trb_tff.trb_simplesnacional_id, trb_tff.trb_declaracaofiscal_id, trb_tff.datalancamento, trb_tff.aliquota, trb_tff.aliquotareferencia, trb_tff.basecalculo, trb_tff.ano, trb_tff.qtdparcela, trb_tff.valorparcela, trb_tff.valor, trb_tff.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tff'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tff' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_empresa_id','trb_empresa_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_porteempresa_id','trb_porteempresa_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_simplesnacional_id','trb_simplesnacional_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_declaracaofiscal_id','trb_declaracaofiscal_id','ENUM'); 
         retorno[4] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[5] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[6] = new FieldSearch('aliquotareferencia','aliquotareferencia','NUMBER'); 
         retorno[7] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[8] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[9] = new FieldSearch('qtdparcela','qtdparcela','NUMBER'); 
         retorno[10] = new FieldSearch('valorparcela','valorparcela','NUMBER'); 
         retorno[11] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[12] = new FieldSearch('numero','numero','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}