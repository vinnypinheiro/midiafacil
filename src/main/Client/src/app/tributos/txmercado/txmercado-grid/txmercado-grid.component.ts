import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TxMercado} from '../txmercado'; 
import {TxMercadoService} from '../txmercado.service'; 

@Component({ 
  selector: 'gov-txmercado-grid', 
  templateUrl: './txmercado-grid.component.html', 
  //styleUrls: ['./txmercado-grid.component.css'] 
}) 
export class TxMercadoGridComponent extends CommonsGrid<TxMercado> implements OnInit { 

     constructor(apiService: TxMercadoService, router: Router) { 
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
         filterData.order = 'trb_txmercado.trb_referencia_id, trb_txmercado.datalancamento, trb_txmercado.ano, trb_txmercado.basecalculo, trb_txmercado.aliquota, trb_txmercado.aliquotareferencia, trb_txmercado.qtdparcela, trb_txmercado.valorparcela, trb_txmercado.valor, trb_txmercado.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_txmercado'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_txmercado' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[1] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[2] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[3] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[4] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[5] = new FieldSearch('aliquotareferencia','aliquotareferencia','NUMBER'); 
         retorno[6] = new FieldSearch('qtdparcela','qtdparcela','NUMBER'); 
         retorno[7] = new FieldSearch('valorparcela','valorparcela','NUMBER'); 
         retorno[8] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[9] = new FieldSearch('numero','numero','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}