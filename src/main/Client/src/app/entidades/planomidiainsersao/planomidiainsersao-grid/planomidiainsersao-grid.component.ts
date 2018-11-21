import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PlanoMidiaInsersao} from '../planomidiainsersao'; 
import {PlanoMidiaInsersaoService} from '../planomidiainsersao.service'; 

@Component({ 
  selector: 'gov-planomidiainsersao-grid', 
  templateUrl: './planomidiainsersao-grid.component.html', 
  //styleUrls: ['./planomidiainsersao-grid.component.css'] 
}) 
export class PlanoMidiaInsersaoGridComponent extends CommonsGrid<PlanoMidiaInsersao> implements OnInit { 

     constructor(apiService: PlanoMidiaInsersaoService, router: Router) { 
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
         let filter= this.buildRowFilter('trb_planomidiainsersao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'planomidiainsersao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}