import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ProcessoExecucaoHistorico} from '../processoexecucaohistorico'; 
import {ProcessoExecucaoHistoricoService} from '../processoexecucaohistorico.service'; 

@Component({ 
  selector: 'gov-processoexecucaohistorico-grid', 
  templateUrl: './processoexecucaohistorico-grid.component.html', 
  //styleUrls: ['./processoexecucaohistorico-grid.component.css'] 
}) 
export class ProcessoExecucaoHistoricoGridComponent extends CommonsGrid<ProcessoExecucaoHistorico> implements OnInit { 

     constructor(apiService: ProcessoExecucaoHistoricoService, router: Router) { 
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
         filterData.order = 'trb_processoexecucaohistorico.trb_processoexecucao_id, trb_processoexecucaohistorico.trb_processoexecucaostatus_id, trb_processoexecucaohistorico.dataregistro, trb_processoexecucaohistorico.operador ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_processoexecucaohistorico'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_processoexecucaohistorico' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_processoexecucao_id','trb_processoexecucao_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_processoexecucaostatus_id','trb_processoexecucaostatus_id','ENUM'); 
         retorno[2] = new FieldSearch('dataregistro','dataregistro','DATE'); 
         retorno[3] = new FieldSearch('operador','operador','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}