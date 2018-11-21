import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CnaeDivisao} from '../cnaedivisao'; 
import {CnaeDivisaoService} from '../cnaedivisao.service'; 

@Component({ 
  selector: 'gov-cnaedivisao-grid', 
  templateUrl: './cnaedivisao-grid.component.html', 
  //styleUrls: ['./cnaedivisao-grid.component.css'] 
}) 
export class CnaeDivisaoGridComponent extends CommonsGrid<CnaeDivisao> implements OnInit { 

     constructor(apiService: CnaeDivisaoService, router: Router) { 
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
         filterData.order = 'trb_cnaedivisao.trb_cnaesecao_id, trb_cnaedivisao.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cnaedivisao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cnaedivisao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_cnaesecao_id','trb_cnaesecao_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}