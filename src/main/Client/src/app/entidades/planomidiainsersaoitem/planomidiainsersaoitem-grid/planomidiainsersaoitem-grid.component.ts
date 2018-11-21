import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PlanoMidiaInsersaoItem} from '../planomidiainsersaoitem'; 
import {PlanoMidiaInsersaoItemService} from '../planomidiainsersaoitem.service'; 

@Component({ 
  selector: 'gov-planomidiainsersaoitem-grid', 
  templateUrl: './planomidiainsersaoitem-grid.component.html', 
  //styleUrls: ['./planomidiainsersaoitem-grid.component.css'] 
}) 
export class PlanoMidiaInsersaoItemGridComponent extends CommonsGrid<PlanoMidiaInsersaoItem> implements OnInit { 

     constructor(apiService: PlanoMidiaInsersaoItemService, router: Router) { 
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
         let filter= this.buildRowFilter('trb_planomidiainsersaoitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'planomidiainsersaoitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}