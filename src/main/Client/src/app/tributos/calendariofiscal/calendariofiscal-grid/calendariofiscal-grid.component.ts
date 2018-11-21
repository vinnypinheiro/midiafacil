import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CalendarioFiscal} from '../calendariofiscal'; 
import {CalendarioFiscalService} from '../calendariofiscal.service'; 

@Component({ 
  selector: 'gov-calendariofiscal-grid', 
  templateUrl: './calendariofiscal-grid.component.html', 
  //styleUrls: ['./calendariofiscal-grid.component.css'] 
}) 
export class CalendarioFiscalGridComponent extends CommonsGrid<CalendarioFiscal> implements OnInit { 

     constructor(apiService: CalendarioFiscalService, router: Router) { 
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
         filterData.order = 'trb_calendariofiscal.trb_tributo_id, trb_calendariofiscal.ano, trb_calendariofiscal.datalimite, trb_calendariofiscal.datavencimento, trb_calendariofiscal.parcela ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_calendariofiscal'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_calendariofiscal' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         retorno[1] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[2] = new FieldSearch('datalimite','datalimite','DATE'); 
         retorno[3] = new FieldSearch('datavencimento','datavencimento','DATE'); 
         retorno[4] = new FieldSearch('parcela','parcela','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}