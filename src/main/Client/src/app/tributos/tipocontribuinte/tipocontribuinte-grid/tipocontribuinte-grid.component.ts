import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoContribuinte} from '../tipocontribuinte'; 
import {TipoContribuinteService} from '../tipocontribuinte.service'; 

@Component({ 
  selector: 'gov-tipocontribuinte-grid', 
  templateUrl: './tipocontribuinte-grid.component.html', 
  //styleUrls: ['./tipocontribuinte-grid.component.css'] 
}) 
export class TipoContribuinteGridComponent extends CommonsGrid<TipoContribuinte> implements OnInit { 

     constructor(apiService: TipoContribuinteService, router: Router) { 
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
         filterData.order = 'trb_tipocontribuinte.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipocontribuinte'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipocontribuinte' ; 
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