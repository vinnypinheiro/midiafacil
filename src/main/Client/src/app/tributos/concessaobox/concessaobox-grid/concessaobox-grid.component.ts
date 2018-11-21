import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ConcessaoBox} from '../concessaobox'; 
import {ConcessaoBoxService} from '../concessaobox.service'; 

@Component({ 
  selector: 'gov-concessaobox-grid', 
  templateUrl: './concessaobox-grid.component.html', 
  //styleUrls: ['./concessaobox-grid.component.css'] 
}) 
export class ConcessaoBoxGridComponent extends CommonsGrid<ConcessaoBox> implements OnInit { 

     constructor(apiService: ConcessaoBoxService, router: Router) { 
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
         filterData.order = 'trb_concessaobox.barraca, trb_concessaobox.localizacao, trb_concessaobox.numerobarraca, trb_concessaobox.produtos ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_concessaobox'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_concessaobox' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('barraca','barraca','STRING'); 
         retorno[1] = new FieldSearch('localizacao','localizacao','STRING'); 
         retorno[2] = new FieldSearch('numerobarraca','numerobarraca','STRING'); 
         retorno[3] = new FieldSearch('produtos','produtos','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}