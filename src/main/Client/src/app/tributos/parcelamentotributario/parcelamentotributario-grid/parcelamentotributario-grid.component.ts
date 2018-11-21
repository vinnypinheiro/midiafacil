import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ParcelamentoTributario} from '../parcelamentotributario'; 
import {ParcelamentoTributarioService} from '../parcelamentotributario.service'; 

@Component({ 
  selector: 'gov-parcelamentotributario-grid', 
  templateUrl: './parcelamentotributario-grid.component.html', 
  //styleUrls: ['./parcelamentotributario-grid.component.css'] 
}) 
export class ParcelamentoTributarioGridComponent extends CommonsGrid<ParcelamentoTributario> implements OnInit { 

     constructor(apiService: ParcelamentoTributarioService, router: Router) { 
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
         filterData.order = 'trb_parcelamentotributario.trb_referencia_id, trb_parcelamentotributario.trb_tipocontribuinte_id, trb_parcelamentotributario.trb_tributo_id, trb_parcelamentotributario.trb_tipoparcelamentotributario_id, trb_parcelamentotributario.datalancamento, trb_parcelamentotributario.processo, trb_parcelamentotributario.numeroprocessojudicial, trb_parcelamentotributario.numerocda, trb_parcelamentotributario.percentrada, trb_parcelamentotributario.qtdparcelas, trb_parcelamentotributario.valor, trb_parcelamentotributario.valorentrada, trb_parcelamentotributario.valorfinanciado, trb_parcelamentotributario.valorparcelas, trb_parcelamentotributario.multa, trb_parcelamentotributario.juros, trb_parcelamentotributario.correcao, trb_parcelamentotributario.descontovalor, trb_parcelamentotributario.descontomulta, trb_parcelamentotributario.descontojuros, trb_parcelamentotributario.descontocorrecao, trb_parcelamentotributario.cancelado, trb_parcelamentotributario.hashcontrol ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_parcelamentotributario'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_parcelamentotributario' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[1] = new FieldSearch('trb_tipocontribuinte_id','trb_tipocontribuinte_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_tipoparcelamentotributario_id','trb_tipoparcelamentotributario_id','ENUM'); 
         retorno[4] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[5] = new FieldSearch('processo','processo','STRING'); 
         retorno[6] = new FieldSearch('numeroprocessojudicial','numeroprocessojudicial','STRING'); 
         retorno[7] = new FieldSearch('numerocda','numerocda','STRING'); 
         retorno[8] = new FieldSearch('percentrada','percentrada','NUMBER'); 
         retorno[9] = new FieldSearch('qtdparcelas','qtdparcelas','NUMBER'); 
         retorno[10] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[11] = new FieldSearch('valorentrada','valorentrada','NUMBER'); 
         retorno[12] = new FieldSearch('valorfinanciado','valorfinanciado','NUMBER'); 
         retorno[13] = new FieldSearch('valorparcelas','valorparcelas','NUMBER'); 
         retorno[14] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[15] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[16] = new FieldSearch('correcao','correcao','NUMBER'); 
         retorno[17] = new FieldSearch('descontovalor','descontovalor','NUMBER'); 
         retorno[18] = new FieldSearch('descontomulta','descontomulta','NUMBER'); 
         retorno[19] = new FieldSearch('descontojuros','descontojuros','NUMBER'); 
         retorno[20] = new FieldSearch('descontocorrecao','descontocorrecao','NUMBER'); 
         retorno[21] = new FieldSearch('cancelado','cancelado','BOOLEAN'); 
         retorno[22] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}