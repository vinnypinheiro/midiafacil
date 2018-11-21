import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CobrancaBancariaStatus} from '../cobrancabancariastatus'; 
import {CobrancaBancariaStatusService} from '../cobrancabancariastatus.service'; 

@Component({ 
  selector: 'gov-cobrancabancariastatus-grid', 
  templateUrl: './cobrancabancariastatus-grid.component.html', 
  //styleUrls: ['./cobrancabancariastatus-grid.component.css'] 
}) 
export class CobrancaBancariaStatusGridComponent extends CommonsGrid<CobrancaBancariaStatus> implements OnInit { 

     constructor(apiService: CobrancaBancariaStatusService, router: Router) { 
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
         filterData.order = 'trb_cobrancabancariastatus.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cobrancabancariastatus'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cobrancabancariastatus' ; 
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