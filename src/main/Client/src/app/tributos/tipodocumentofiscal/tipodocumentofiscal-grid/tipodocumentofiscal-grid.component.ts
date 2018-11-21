import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoDocumentoFiscal} from '../tipodocumentofiscal'; 
import {TipoDocumentoFiscalService} from '../tipodocumentofiscal.service'; 

@Component({ 
  selector: 'gov-tipodocumentofiscal-grid', 
  templateUrl: './tipodocumentofiscal-grid.component.html', 
  //styleUrls: ['./tipodocumentofiscal-grid.component.css'] 
}) 
export class TipoDocumentoFiscalGridComponent extends CommonsGrid<TipoDocumentoFiscal> implements OnInit { 

     constructor(apiService: TipoDocumentoFiscalService, router: Router) { 
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
         filterData.order = 'trb_tipodocumentofiscal.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipodocumentofiscal'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipodocumentofiscal' ; 
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