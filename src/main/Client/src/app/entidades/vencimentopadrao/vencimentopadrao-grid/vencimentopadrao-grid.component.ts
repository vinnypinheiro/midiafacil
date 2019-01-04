import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {VencimentoPadrao} from '../vencimentopadrao'; 
import {VencimentoPadraoService} from '../vencimentopadrao.service'; 

@Component({ 
  selector: 'gov-vencimentopadrao-grid', 
  templateUrl: './vencimentopadrao-grid.component.html', 
  //styleUrls: ['./vencimentopadrao-grid.component.css'] 
}) 
export class VencimentoPadraoGridComponent extends CommonsGrid<VencimentoPadrao> implements OnInit { 

     constructor(apiService: VencimentoPadraoService, router: Router) { 
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
         filterData.order = 'vencimentopadrao.descricao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_vencimentopadrao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'vencimentopadrao' ; 
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