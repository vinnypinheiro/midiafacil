import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {VupConstrucao} from '../vupconstrucao'; 
import {VupConstrucaoService} from '../vupconstrucao.service'; 

@Component({ 
  selector: 'gov-vupconstrucao-grid', 
  templateUrl: './vupconstrucao-grid.component.html', 
  //styleUrls: ['./vupconstrucao-grid.component.css'] 
}) 
export class VupConstrucaoGridComponent extends CommonsGrid<VupConstrucao> implements OnInit { 

     constructor(apiService: VupConstrucaoService, router: Router) { 
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
         filterData.order = 'trb_vupconstrucao.ano, trb_vupconstrucao.trb_tributo_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_vupconstrucao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_vupconstrucao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[1] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}