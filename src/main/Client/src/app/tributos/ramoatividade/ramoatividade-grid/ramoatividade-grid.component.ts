import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {RamoAtividade} from '../ramoatividade'; 
import {RamoAtividadeService} from '../ramoatividade.service'; 

@Component({ 
  selector: 'gov-ramoatividade-grid', 
  templateUrl: './ramoatividade-grid.component.html', 
  //styleUrls: ['./ramoatividade-grid.component.css'] 
}) 
export class RamoAtividadeGridComponent extends CommonsGrid<RamoAtividade> implements OnInit { 

     constructor(apiService: RamoAtividadeService, router: Router) { 
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
         filterData.order = 'trb_ramoatividade.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_ramoatividade'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_ramoatividade' ; 
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