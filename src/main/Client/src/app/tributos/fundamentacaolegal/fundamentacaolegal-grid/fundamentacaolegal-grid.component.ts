import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {FundamentacaoLegal} from '../fundamentacaolegal'; 
import {FundamentacaoLegalService} from '../fundamentacaolegal.service'; 

@Component({ 
  selector: 'gov-fundamentacaolegal-grid', 
  templateUrl: './fundamentacaolegal-grid.component.html', 
  //styleUrls: ['./fundamentacaolegal-grid.component.css'] 
}) 
export class FundamentacaoLegalGridComponent extends CommonsGrid<FundamentacaoLegal> implements OnInit { 

     constructor(apiService: FundamentacaoLegalService, router: Router) { 
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
         filterData.order = 'trb_fundamentacaolegal.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_fundamentacaolegal'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_fundamentacaolegal' ; 
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