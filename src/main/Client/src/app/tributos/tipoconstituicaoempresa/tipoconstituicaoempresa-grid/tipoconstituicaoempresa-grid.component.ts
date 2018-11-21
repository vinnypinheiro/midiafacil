import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoConstituicaoEmpresa} from '../tipoconstituicaoempresa'; 
import {TipoConstituicaoEmpresaService} from '../tipoconstituicaoempresa.service'; 

@Component({ 
  selector: 'gov-tipoconstituicaoempresa-grid', 
  templateUrl: './tipoconstituicaoempresa-grid.component.html', 
  //styleUrls: ['./tipoconstituicaoempresa-grid.component.css'] 
}) 
export class TipoConstituicaoEmpresaGridComponent extends CommonsGrid<TipoConstituicaoEmpresa> implements OnInit { 

     constructor(apiService: TipoConstituicaoEmpresaService, router: Router) { 
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
         filterData.order = 'trb_tipoconstituicaoempresa.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipoconstituicaoempresa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipoconstituicaoempresa' ; 
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