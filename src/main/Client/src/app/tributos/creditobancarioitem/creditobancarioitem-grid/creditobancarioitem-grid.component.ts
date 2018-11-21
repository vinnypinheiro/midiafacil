import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CreditoBancarioItem} from '../creditobancarioitem'; 
import {CreditoBancarioItemService} from '../creditobancarioitem.service'; 

@Component({ 
  selector: 'gov-creditobancarioitem-grid', 
  templateUrl: './creditobancarioitem-grid.component.html', 
  //styleUrls: ['./creditobancarioitem-grid.component.css'] 
}) 
export class CreditoBancarioItemGridComponent extends CommonsGrid<CreditoBancarioItem> implements OnInit { 

     constructor(apiService: CreditoBancarioItemService, router: Router) { 
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
         filterData.order = 'trb_creditobancarioitem.trb_creditobancario_id, trb_creditobancarioitem.trb_cobrancabancariastatus_id, trb_creditobancarioitem.registro, trb_creditobancarioitem.bancoarrecadador, trb_creditobancarioitem.nossonumero, trb_creditobancarioitem.datacredito, trb_creditobancarioitem.datapagamento, trb_creditobancarioitem.datavencimento, trb_creditobancarioitem.valororiginal, trb_creditobancarioitem.valortarifa, trb_creditobancarioitem.valorrecebido, trb_creditobancarioitem.juros, trb_creditobancarioitem.multa, trb_creditobancarioitem.correcao, trb_creditobancarioitem.desconto ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_creditobancarioitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_creditobancarioitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_creditobancario_id','trb_creditobancario_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_cobrancabancariastatus_id','trb_cobrancabancariastatus_id','ENUM'); 
         retorno[2] = new FieldSearch('registro','registro','NUMBER'); 
         retorno[3] = new FieldSearch('bancoarrecadador','bancoarrecadador','NUMBER'); 
         retorno[4] = new FieldSearch('nossonumero','nossonumero','STRING'); 
         retorno[5] = new FieldSearch('datacredito','datacredito','DATE'); 
         retorno[6] = new FieldSearch('datapagamento','datapagamento','DATE'); 
         retorno[7] = new FieldSearch('datavencimento','datavencimento','DATE'); 
         retorno[8] = new FieldSearch('valororiginal','valororiginal','NUMBER'); 
         retorno[9] = new FieldSearch('valortarifa','valortarifa','NUMBER'); 
         retorno[10] = new FieldSearch('valorrecebido','valorrecebido','NUMBER'); 
         retorno[11] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[12] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[13] = new FieldSearch('correcao','correcao','NUMBER'); 
         retorno[14] = new FieldSearch('desconto','desconto','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}