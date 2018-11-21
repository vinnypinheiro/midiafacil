import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {RecursoSistema} from '../recursosistema'; 
import {RecursoSistemaService} from '../recursosistema.service'; 

@Component({ 
  selector: 'gov-recursosistema-grid', 
  templateUrl: './recursosistema-grid.component.html', 
  //styleUrls: ['./recursosistema-grid.component.css'] 
}) 
export class RecursoSistemaGridComponent extends CommonsGrid<RecursoSistema> implements OnInit { 

     constructor(apiService: RecursoSistemaService, router: Router) { 
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
         filterData.order = 'trb_recursosistema.modulosistema ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_recursosistema'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_recursosistema' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('modulosistema','modulosistema','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}