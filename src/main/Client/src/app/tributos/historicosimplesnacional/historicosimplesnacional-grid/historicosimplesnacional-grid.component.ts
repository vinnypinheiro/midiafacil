import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {HistoricoSimplesNacional} from '../historicosimplesnacional'; 
import {HistoricoSimplesNacionalService} from '../historicosimplesnacional.service'; 

@Component({ 
  selector: 'gov-historicosimplesnacional-grid', 
  templateUrl: './historicosimplesnacional-grid.component.html', 
  //styleUrls: ['./historicosimplesnacional-grid.component.css'] 
}) 
export class HistoricoSimplesNacionalGridComponent extends CommonsGrid<HistoricoSimplesNacional> implements OnInit { 

     constructor(apiService: HistoricoSimplesNacionalService, router: Router) { 
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
         filterData.order = 'trb_historicosimplesnacional.codigo, trb_historicosimplesnacional.datafim, trb_historicosimplesnacional.datainicio, trb_historicosimplesnacional.detalhamento ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_historicosimplesnacional'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_historicosimplesnacional' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[2] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[3] = new FieldSearch('detalhamento','detalhamento','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}