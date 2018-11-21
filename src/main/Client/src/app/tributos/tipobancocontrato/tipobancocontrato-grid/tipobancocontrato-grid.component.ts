import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoBancoContrato} from '../tipobancocontrato'; 
import {TipoBancoContratoService} from '../tipobancocontrato.service'; 

@Component({ 
  selector: 'gov-tipobancocontrato-grid', 
  templateUrl: './tipobancocontrato-grid.component.html', 
  //styleUrls: ['./tipobancocontrato-grid.component.css'] 
}) 
export class TipoBancoContratoGridComponent extends CommonsGrid<TipoBancoContrato> implements OnInit { 

     constructor(apiService: TipoBancoContratoService, router: Router) { 
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
         filterData.order = 'trb_tipobancocontrato.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipobancocontrato'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipobancocontrato' ; 
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