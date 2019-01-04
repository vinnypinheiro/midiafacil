import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {FaturamentoPadrao} from '../faturamentopadrao'; 
import {FaturamentoPadraoService} from '../faturamentopadrao.service'; 

@Component({ 
  selector: 'gov-faturamentopadrao-grid', 
  templateUrl: './faturamentopadrao-grid.component.html', 
  //styleUrls: ['./faturamentopadrao-grid.component.css'] 
}) 
export class FaturamentoPadraoGridComponent extends CommonsGrid<FaturamentoPadrao> implements OnInit { 

     constructor(apiService: FaturamentoPadraoService, router: Router) { 
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
         filterData.order = 'faturamentopadrao.descricao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_faturamentopadrao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'faturamentopadrao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('descricao','descricao','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}