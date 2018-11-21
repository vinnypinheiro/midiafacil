import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoUsoAlvara} from '../tipousoalvara'; 
import {TipoUsoAlvaraService} from '../tipousoalvara.service'; 

@Component({ 
  selector: 'gov-tipousoalvara-grid', 
  templateUrl: './tipousoalvara-grid.component.html', 
  //styleUrls: ['./tipousoalvara-grid.component.css'] 
}) 
export class TipoUsoAlvaraGridComponent extends CommonsGrid<TipoUsoAlvara> implements OnInit { 

     constructor(apiService: TipoUsoAlvaraService, router: Router) { 
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
         filterData.order = 'trb_tipousoalvara.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipousoalvara'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipousoalvara' ; 
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