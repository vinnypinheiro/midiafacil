import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PlanoMidia} from '../planomidia'; 
import {PlanoMidiaService} from '../planomidia.service'; 

@Component({ 
  selector: 'gov-planomidia-grid', 
  templateUrl: './planomidia-grid.component.html', 
  //styleUrls: ['./planomidia-grid.component.css'] 
}) 
export class PlanoMidiaGridComponent extends CommonsGrid<PlanoMidia> implements OnInit { 

     constructor(apiService: PlanoMidiaService, router: Router) { 
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
         filterData.order = 'planomidia.codigo, planomidia.hora, planomidia.mercado, planomidia.obs, planomidia.data, planomidia.programa, planomidia.agencia_id, planomidia.campanha_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_planomidia'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'planomidia' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('hora','hora','LOOKUP'); 
         retorno[2] = new FieldSearch('mercado','mercado','STRING'); 
         retorno[3] = new FieldSearch('obs','obs','STRING'); 
         retorno[4] = new FieldSearch('data','data','DATE'); 
         retorno[5] = new FieldSearch('programa','programa','STRING'); 
         retorno[6] = new FieldSearch('agencia_id','agencia_id','ENUM'); 
         retorno[7] = new FieldSearch('campanha_id','campanha_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}