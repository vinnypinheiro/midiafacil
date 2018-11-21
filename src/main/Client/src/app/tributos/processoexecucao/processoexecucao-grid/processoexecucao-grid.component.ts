import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ProcessoExecucao} from '../processoexecucao'; 
import {ProcessoExecucaoService} from '../processoexecucao.service'; 

@Component({ 
  selector: 'gov-processoexecucao-grid', 
  templateUrl: './processoexecucao-grid.component.html', 
  //styleUrls: ['./processoexecucao-grid.component.css'] 
}) 
export class ProcessoExecucaoGridComponent extends CommonsGrid<ProcessoExecucao> implements OnInit { 

     constructor(apiService: ProcessoExecucaoService, router: Router) { 
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
         filterData.order = 'trb_processoexecucao.trb_contribuinte_id, trb_processoexecucao.trb_referencia_id, trb_processoexecucao.trb_processoexecucaostatus_id, trb_processoexecucao.parecerfiscalizacao, trb_processoexecucao.controleprocessoexterno, trb_processoexecucao.data, trb_processoexecucao.valor, trb_processoexecucao.juros, trb_processoexecucao.multa, trb_processoexecucao.correcao, trb_processoexecucao.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_processoexecucao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_processoexecucao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[2] = new FieldSearch('trb_processoexecucaostatus_id','trb_processoexecucaostatus_id','ENUM'); 
         retorno[3] = new FieldSearch('parecerfiscalizacao','parecerfiscalizacao','STRING'); 
         retorno[4] = new FieldSearch('controleprocessoexterno','controleprocessoexterno','STRING'); 
         retorno[5] = new FieldSearch('data','data','DATE'); 
         retorno[6] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[7] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[8] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[9] = new FieldSearch('correcao','correcao','NUMBER'); 
         retorno[10] = new FieldSearch('numero','numero','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}