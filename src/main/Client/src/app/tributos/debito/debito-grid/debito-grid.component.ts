import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Debito} from '../debito'; 
import {DebitoService} from '../debito.service'; 

@Component({ 
  selector: 'gov-debito-grid', 
  templateUrl: './debito-grid.component.html', 
  //styleUrls: ['./debito-grid.component.css'] 
}) 
export class DebitoGridComponent extends CommonsGrid<Debito> implements OnInit { 

     constructor(apiService: DebitoService, router: Router) { 
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
         filterData.order = 'trb_debito.trb_referencia_id, trb_debito.tipocontribuinte, trb_debito.trb_unidadegestora_id, trb_debito.trb_tributo_id, trb_debito.trb_tipodebito_id, trb_debito.data, trb_debito.aliquota, trb_debito.basecalculo, trb_debito.ano, trb_debito.valor, trb_debito.processo, trb_debito.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_debito'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_debito' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[1] = new FieldSearch('tipocontribuinte','tipocontribuinte','STRING'); 
         retorno[2] = new FieldSearch('trb_unidadegestora_id','trb_unidadegestora_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         retorno[4] = new FieldSearch('trb_tipodebito_id','trb_tipodebito_id','ENUM'); 
         retorno[5] = new FieldSearch('data','data','DATE'); 
         retorno[6] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[7] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[8] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[9] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[10] = new FieldSearch('processo','processo','STRING'); 
         retorno[11] = new FieldSearch('numero','numero','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}