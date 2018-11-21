import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ProcessoExecucaoItem} from '../processoexecucaoitem'; 
import {ProcessoExecucaoItemService} from '../processoexecucaoitem.service'; 

@Component({ 
  selector: 'gov-processoexecucaoitem-grid', 
  templateUrl: './processoexecucaoitem-grid.component.html', 
  //styleUrls: ['./processoexecucaoitem-grid.component.css'] 
}) 
export class ProcessoExecucaoItemGridComponent extends CommonsGrid<ProcessoExecucaoItem> implements OnInit { 

     constructor(apiService: ProcessoExecucaoItemService, router: Router) { 
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
         filterData.order = 'trb_processoexecucaoitem.trb_processoexecucao_id, trb_processoexecucaoitem.trb_dividaativaitem_id, trb_processoexecucaoitem.valor, trb_processoexecucaoitem.juros, trb_processoexecucaoitem.multa ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_processoexecucaoitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_processoexecucaoitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_processoexecucao_id','trb_processoexecucao_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_dividaativaitem_id','trb_dividaativaitem_id','ENUM'); 
         retorno[2] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[3] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[4] = new FieldSearch('multa','multa','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}