import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {LocalConcessaoBox} from '../localconcessaobox'; 
import {LocalConcessaoBoxService} from '../localconcessaobox.service'; 

@Component({ 
  selector: 'gov-localconcessaobox-grid', 
  templateUrl: './localconcessaobox-grid.component.html', 
  //styleUrls: ['./localconcessaobox-grid.component.css'] 
}) 
export class LocalConcessaoBoxGridComponent extends CommonsGrid<LocalConcessaoBox> implements OnInit { 

     constructor(apiService: LocalConcessaoBoxService, router: Router) { 
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
         let filter= this.buildRowFilter('trb_localconcessaobox'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_localconcessaobox' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}