import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {EnquadramentoFiscal} from '../enquadramentofiscal'; 
import {EnquadramentoFiscalService} from '../enquadramentofiscal.service'; 

@Component({ 
  selector: 'gov-enquadramentofiscal-grid', 
  templateUrl: './enquadramentofiscal-grid.component.html', 
  //styleUrls: ['./enquadramentofiscal-grid.component.css'] 
}) 
export class EnquadramentoFiscalGridComponent extends CommonsGrid<EnquadramentoFiscal> implements OnInit { 

     constructor(apiService: EnquadramentoFiscalService, router: Router) { 
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
         filterData.order = 'trb_enquadramentofiscal.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_enquadramentofiscal'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_enquadramentofiscal' ; 
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