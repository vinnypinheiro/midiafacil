import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {DeclaracaoFiscal} from '../declaracaofiscal'; 
import {DeclaracaoFiscalService} from '../declaracaofiscal.service'; 

@Component({ 
  selector: 'gov-declaracaofiscal-grid', 
  templateUrl: './declaracaofiscal-grid.component.html', 
  //styleUrls: ['./declaracaofiscal-grid.component.css'] 
}) 
export class DeclaracaoFiscalGridComponent extends CommonsGrid<DeclaracaoFiscal> implements OnInit { 

     constructor(apiService: DeclaracaoFiscalService, router: Router) { 
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
         filterData.order = 'trb_declaracaofiscal.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_declaracaofiscal'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_declaracaofiscal' ; 
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