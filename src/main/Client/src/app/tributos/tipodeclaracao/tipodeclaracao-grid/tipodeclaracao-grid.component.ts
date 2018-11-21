import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoDeclaracao} from '../tipodeclaracao'; 
import {TipoDeclaracaoService} from '../tipodeclaracao.service'; 

@Component({ 
  selector: 'gov-tipodeclaracao-grid', 
  templateUrl: './tipodeclaracao-grid.component.html', 
  //styleUrls: ['./tipodeclaracao-grid.component.css'] 
}) 
export class TipoDeclaracaoGridComponent extends CommonsGrid<TipoDeclaracao> implements OnInit { 

     constructor(apiService: TipoDeclaracaoService, router: Router) { 
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
         filterData.order = 'trb_tipodeclaracao.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipodeclaracao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipodeclaracao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}