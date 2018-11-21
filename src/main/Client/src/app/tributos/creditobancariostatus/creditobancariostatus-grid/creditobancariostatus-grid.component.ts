import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CreditoBancarioStatus} from '../creditobancariostatus'; 
import {CreditoBancarioStatusService} from '../creditobancariostatus.service'; 

@Component({ 
  selector: 'gov-creditobancariostatus-grid', 
  templateUrl: './creditobancariostatus-grid.component.html', 
  //styleUrls: ['./creditobancariostatus-grid.component.css'] 
}) 
export class CreditoBancarioStatusGridComponent extends CommonsGrid<CreditoBancarioStatus> implements OnInit { 

     constructor(apiService: CreditoBancarioStatusService, router: Router) { 
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
         filterData.order = 'trb_creditobancariostatus.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_creditobancariostatus'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_creditobancariostatus' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}