import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {OperadorRecurso} from '../operadorrecurso'; 
import {OperadorRecursoService} from '../operadorrecurso.service'; 

@Component({ 
  selector: 'gov-operadorrecurso-grid', 
  templateUrl: './operadorrecurso-grid.component.html', 
  //styleUrls: ['./operadorrecurso-grid.component.css'] 
}) 
export class OperadorRecursoGridComponent extends CommonsGrid<OperadorRecurso> implements OnInit { 

     constructor(apiService: OperadorRecursoService, router: Router) { 
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
         filterData.order = 'trb_operadorrecurso.deletar, trb_operadorrecurso.inserir, trb_operadorrecurso.atualizar, trb_operadorrecurso.consultar, trb_operadorrecurso.report, trb_operadorrecurso.trb_operador_id, trb_operadorrecurso.trb_unidadegestora_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_operadorrecurso'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_operadorrecurso' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('deletar','deletar','BOOLEAN'); 
         retorno[1] = new FieldSearch('inserir','inserir','BOOLEAN'); 
         retorno[2] = new FieldSearch('atualizar','atualizar','BOOLEAN'); 
         retorno[3] = new FieldSearch('consultar','consultar','BOOLEAN'); 
         retorno[4] = new FieldSearch('report','report','BOOLEAN'); 
         retorno[5] = new FieldSearch('trb_operador_id','trb_operador_id','ENUM'); 
         retorno[6] = new FieldSearch('trb_unidadegestora_id','trb_unidadegestora_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}