import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CnaeClasse} from '../cnaeclasse'; 
import {CnaeClasseService} from '../cnaeclasse.service'; 

@Component({ 
  selector: 'gov-cnaeclasse-grid', 
  templateUrl: './cnaeclasse-grid.component.html', 
  //styleUrls: ['./cnaeclasse-grid.component.css'] 
}) 
export class CnaeClasseGridComponent extends CommonsGrid<CnaeClasse> implements OnInit { 

     constructor(apiService: CnaeClasseService, router: Router) { 
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
         filterData.order = 'trb_cnaeclasse.trb_cnaegrupo_id, trb_cnaeclasse.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cnaeclasse'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cnaeclasse' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_cnaegrupo_id','trb_cnaegrupo_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}