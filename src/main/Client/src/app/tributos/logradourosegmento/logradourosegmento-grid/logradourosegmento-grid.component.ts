import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {LogradouroSegmento} from '../logradourosegmento'; 
import {LogradouroSegmentoService} from '../logradourosegmento.service'; 

@Component({ 
  selector: 'gov-logradourosegmento-grid', 
  templateUrl: './logradourosegmento-grid.component.html', 
  //styleUrls: ['./logradourosegmento-grid.component.css'] 
}) 
export class LogradouroSegmentoGridComponent extends CommonsGrid<LogradouroSegmento> implements OnInit { 

     constructor(apiService: LogradouroSegmentoService, router: Router) { 
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
         filterData.order = 'trb_logradourosegmento.codigo, trb_logradourosegmento.lado, trb_logradourosegmento.trb_bairro_id, trb_logradourosegmento.trb_logradouro_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_logradourosegmento'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_logradourosegmento' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('lado','lado','STRING'); 
         retorno[2] = new FieldSearch('trb_bairro_id','trb_bairro_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_logradouro_id','trb_logradouro_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}