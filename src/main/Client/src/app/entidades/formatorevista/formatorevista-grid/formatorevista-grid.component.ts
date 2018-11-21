import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {FormatoRevista} from '../formatorevista'; 
import {FormatoRevistaService} from '../formatorevista.service'; 

@Component({ 
  selector: 'gov-formatorevista-grid', 
  templateUrl: './formatorevista-grid.component.html', 
  //styleUrls: ['./formatorevista-grid.component.css'] 
}) 
export class FormatoRevistaGridComponent extends CommonsGrid<FormatoRevista> implements OnInit { 

     constructor(apiService: FormatoRevistaService, router: Router) { 
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
         filterData.order = ' ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_formatorevista'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'formatorevista' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}