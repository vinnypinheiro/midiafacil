import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {StatusSimplesNacional} from '../statussimplesnacional'; 
import {StatusSimplesNacionalService} from '../statussimplesnacional.service'; 

@Component({ 
  selector: 'gov-statussimplesnacional-grid', 
  templateUrl: './statussimplesnacional-grid.component.html', 
  //styleUrls: ['./statussimplesnacional-grid.component.css'] 
}) 
export class StatusSimplesNacionalGridComponent extends CommonsGrid<StatusSimplesNacional> implements OnInit { 

     constructor(apiService: StatusSimplesNacionalService, router: Router) { 
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
         filterData.order = 'trb_statussimplesnacional.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_statussimplesnacional'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_statussimplesnacional' ; 
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