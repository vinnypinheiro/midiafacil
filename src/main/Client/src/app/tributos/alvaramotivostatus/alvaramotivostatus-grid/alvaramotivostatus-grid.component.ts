import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {AlvaraMotivoStatus} from '../alvaramotivostatus'; 
import {AlvaraMotivoStatusService} from '../alvaramotivostatus.service'; 

@Component({ 
  selector: 'gov-alvaramotivostatus-grid', 
  templateUrl: './alvaramotivostatus-grid.component.html', 
  //styleUrls: ['./alvaramotivostatus-grid.component.css'] 
}) 
export class AlvaraMotivoStatusGridComponent extends CommonsGrid<AlvaraMotivoStatus> implements OnInit { 

     constructor(apiService: AlvaraMotivoStatusService, router: Router) { 
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
         filterData.order = 'trb_alvaramotivostatus.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_alvaramotivostatus'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_alvaramotivostatus' ; 
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