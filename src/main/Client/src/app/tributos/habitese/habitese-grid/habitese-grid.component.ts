import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Habitese} from '../habitese'; 
import {HabiteseService} from '../habitese.service'; 

@Component({ 
  selector: 'gov-habitese-grid', 
  templateUrl: './habitese-grid.component.html', 
  //styleUrls: ['./habitese-grid.component.css'] 
}) 
export class HabiteseGridComponent extends CommonsGrid<Habitese> implements OnInit { 

     constructor(apiService: HabiteseService, router: Router) { 
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
         filterData.order = 'trb_habitese.trb_imovel_id, trb_habitese.datainicio, trb_habitese.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_habitese'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_habitese' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_imovel_id','trb_imovel_id','ENUM'); 
         retorno[1] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[2] = new FieldSearch('numero','numero','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}