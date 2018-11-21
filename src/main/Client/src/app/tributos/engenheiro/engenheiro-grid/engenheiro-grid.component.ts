import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Engenheiro} from '../engenheiro'; 
import {EngenheiroService} from '../engenheiro.service'; 

@Component({ 
  selector: 'gov-engenheiro-grid', 
  templateUrl: './engenheiro-grid.component.html', 
  //styleUrls: ['./engenheiro-grid.component.css'] 
}) 
export class EngenheiroGridComponent extends CommonsGrid<Engenheiro> implements OnInit { 

     constructor(apiService: EngenheiroService, router: Router) { 
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
         filterData.order = 'trb_engenheiro.trb_contribuinte_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_engenheiro'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_engenheiro' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}