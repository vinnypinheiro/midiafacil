import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Logradouro} from '../logradouro'; 
import {LogradouroService} from '../logradouro.service'; 

@Component({ 
  selector: 'gov-logradouro-grid', 
  templateUrl: './logradouro-grid.component.html', 
  //styleUrls: ['./logradouro-grid.component.css'] 
}) 
export class LogradouroGridComponent extends CommonsGrid<Logradouro> implements OnInit { 

     constructor(apiService: LogradouroService, router: Router) { 
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
         filterData.order = 'trb_logradouro.trb_tipologradouro_id, trb_logradouro.codigo, trb_logradouro.nome, trb_logradouro.numerodecreto, trb_logradouro.nomeanterior, trb_logradouro.nomepopular ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_logradouro'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_logradouro' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_tipologradouro_id','trb_tipologradouro_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[2] = new FieldSearch('nome','nome','STRING'); 
         retorno[3] = new FieldSearch('numerodecreto','numerodecreto','STRING'); 
         retorno[4] = new FieldSearch('nomeanterior','nomeanterior','STRING'); 
         retorno[5] = new FieldSearch('nomepopular','nomepopular','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}