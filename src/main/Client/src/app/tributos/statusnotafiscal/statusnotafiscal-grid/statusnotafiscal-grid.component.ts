import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {StatusNotaFiscal} from '../statusnotafiscal'; 
import {StatusNotaFiscalService} from '../statusnotafiscal.service'; 

@Component({ 
  selector: 'gov-statusnotafiscal-grid', 
  templateUrl: './statusnotafiscal-grid.component.html', 
  //styleUrls: ['./statusnotafiscal-grid.component.css'] 
}) 
export class StatusNotaFiscalGridComponent extends CommonsGrid<StatusNotaFiscal> implements OnInit { 

     constructor(apiService: StatusNotaFiscalService, router: Router) { 
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
         filterData.order = 'trb_statusnotafiscal.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_statusnotafiscal'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_statusnotafiscal' ; 
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