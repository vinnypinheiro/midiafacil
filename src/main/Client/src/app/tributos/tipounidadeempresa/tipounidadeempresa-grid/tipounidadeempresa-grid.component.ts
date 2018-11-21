import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoUnidadeEmpresa} from '../tipounidadeempresa'; 
import {TipoUnidadeEmpresaService} from '../tipounidadeempresa.service'; 

@Component({ 
  selector: 'gov-tipounidadeempresa-grid', 
  templateUrl: './tipounidadeempresa-grid.component.html', 
  //styleUrls: ['./tipounidadeempresa-grid.component.css'] 
}) 
export class TipoUnidadeEmpresaGridComponent extends CommonsGrid<TipoUnidadeEmpresa> implements OnInit { 

     constructor(apiService: TipoUnidadeEmpresaService, router: Router) { 
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
         filterData.order = 'trb_tipounidadeempresa.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipounidadeempresa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipounidadeempresa' ; 
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