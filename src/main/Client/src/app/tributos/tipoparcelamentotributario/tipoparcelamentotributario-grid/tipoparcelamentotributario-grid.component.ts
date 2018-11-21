import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoParcelamentoTributario} from '../tipoparcelamentotributario'; 
import {TipoParcelamentoTributarioService} from '../tipoparcelamentotributario.service'; 

@Component({ 
  selector: 'gov-tipoparcelamentotributario-grid', 
  templateUrl: './tipoparcelamentotributario-grid.component.html', 
  //styleUrls: ['./tipoparcelamentotributario-grid.component.css'] 
}) 
export class TipoParcelamentoTributarioGridComponent extends CommonsGrid<TipoParcelamentoTributario> implements OnInit { 

     constructor(apiService: TipoParcelamentoTributarioService, router: Router) { 
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
         filterData.order = 'trb_tipoparcelamentotributario.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipoparcelamentotributario'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipoparcelamentotributario' ; 
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