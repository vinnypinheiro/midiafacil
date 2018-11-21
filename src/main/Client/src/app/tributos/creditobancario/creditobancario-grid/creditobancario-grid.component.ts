import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CreditoBancario} from '../creditobancario'; 
import {CreditoBancarioService} from '../creditobancario.service'; 

@Component({ 
  selector: 'gov-creditobancario-grid', 
  templateUrl: './creditobancario-grid.component.html', 
  //styleUrls: ['./creditobancario-grid.component.css'] 
}) 
export class CreditoBancarioGridComponent extends CommonsGrid<CreditoBancario> implements OnInit { 

     constructor(apiService: CreditoBancarioService, router: Router) { 
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
         filterData.order = 'trb_creditobancario.trb_banco_id, trb_creditobancario.trb_status_id, trb_creditobancario.nomeempresa, trb_creditobancario.header, trb_creditobancario.contrato, trb_creditobancario.nomearquivo, trb_creditobancario.dataarquivo, trb_creditobancario.agencia, trb_creditobancario.conta, trb_creditobancario.lote, trb_creditobancario.qtdregistros, trb_creditobancario.trailler ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_creditobancario'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_creditobancario' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_banco_id','trb_banco_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_status_id','trb_status_id','ENUM'); 
         retorno[2] = new FieldSearch('nomeempresa','nomeempresa','STRING'); 
         retorno[3] = new FieldSearch('header','header','STRING'); 
         retorno[4] = new FieldSearch('contrato','contrato','STRING'); 
         retorno[5] = new FieldSearch('nomearquivo','nomearquivo','STRING'); 
         retorno[6] = new FieldSearch('dataarquivo','dataarquivo','DATE'); 
         retorno[7] = new FieldSearch('agencia','agencia','STRING'); 
         retorno[8] = new FieldSearch('conta','conta','STRING'); 
         retorno[9] = new FieldSearch('lote','lote','STRING'); 
         retorno[10] = new FieldSearch('qtdregistros','qtdregistros','NUMBER'); 
         retorno[11] = new FieldSearch('trailler','trailler','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}