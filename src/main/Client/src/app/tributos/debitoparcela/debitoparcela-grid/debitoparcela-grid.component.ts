import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {DebitoParcela} from '../debitoparcela'; 
import {DebitoParcelaService} from '../debitoparcela.service'; 

@Component({ 
  selector: 'gov-debitoparcela-grid', 
  templateUrl: './debitoparcela-grid.component.html', 
  //styleUrls: ['./debitoparcela-grid.component.css'] 
}) 
export class DebitoParcelaGridComponent extends CommonsGrid<DebitoParcela> implements OnInit { 

     constructor(apiService: DebitoParcelaService, router: Router) { 
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
         filterData.order = 'trb_debitoparcela.trb_debito_id, trb_debitoparcela.datavencimento, trb_debitoparcela.valor, trb_debitoparcela.parcela, trb_debitoparcela.trb_statusdebito_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_debitoparcela'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_debitoparcela' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_debito_id','trb_debito_id','ENUM'); 
         retorno[1] = new FieldSearch('datavencimento','datavencimento','DATE'); 
         retorno[2] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[3] = new FieldSearch('parcela','parcela','NUMBER'); 
         retorno[4] = new FieldSearch('trb_statusdebito_id','trb_statusdebito_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}