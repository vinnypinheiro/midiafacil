import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ParcelamentoTributarioItem} from '../parcelamentotributarioitem'; 
import {ParcelamentoTributarioItemService} from '../parcelamentotributarioitem.service'; 

@Component({ 
  selector: 'gov-parcelamentotributarioitem-grid', 
  templateUrl: './parcelamentotributarioitem-grid.component.html', 
  //styleUrls: ['./parcelamentotributarioitem-grid.component.css'] 
}) 
export class ParcelamentoTributarioItemGridComponent extends CommonsGrid<ParcelamentoTributarioItem> implements OnInit { 

     constructor(apiService: ParcelamentoTributarioItemService, router: Router) { 
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
         filterData.order = 'trb_parcelamentotributarioitem.valor, trb_parcelamentotributarioitem.multa, trb_parcelamentotributarioitem.juros, trb_parcelamentotributarioitem.correcao, trb_parcelamentotributarioitem.trb_debitoparcela_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_parcelamentotributarioitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_parcelamentotributarioitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[1] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[2] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[3] = new FieldSearch('correcao','correcao','NUMBER'); 
         retorno[4] = new FieldSearch('trb_debitoparcela_id','trb_debitoparcela_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}