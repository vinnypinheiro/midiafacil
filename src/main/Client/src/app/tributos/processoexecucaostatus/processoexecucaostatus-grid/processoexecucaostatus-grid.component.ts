import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ProcessoExecucaoStatus} from '../processoexecucaostatus'; 
import {ProcessoExecucaoStatusService} from '../processoexecucaostatus.service'; 

@Component({ 
  selector: 'gov-processoexecucaostatus-grid', 
  templateUrl: './processoexecucaostatus-grid.component.html', 
  //styleUrls: ['./processoexecucaostatus-grid.component.css'] 
}) 
export class ProcessoExecucaoStatusGridComponent extends CommonsGrid<ProcessoExecucaoStatus> implements OnInit { 

     constructor(apiService: ProcessoExecucaoStatusService, router: Router) { 
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
         filterData.order = 'trb_processoexecucaostatus.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_processoexecucaostatus'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_processoexecucaostatus' ; 
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