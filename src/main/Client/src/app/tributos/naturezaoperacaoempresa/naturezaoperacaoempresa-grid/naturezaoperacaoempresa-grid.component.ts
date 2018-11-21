import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {NaturezaOperacaoEmpresa} from '../naturezaoperacaoempresa'; 
import {NaturezaOperacaoEmpresaService} from '../naturezaoperacaoempresa.service'; 

@Component({ 
  selector: 'gov-naturezaoperacaoempresa-grid', 
  templateUrl: './naturezaoperacaoempresa-grid.component.html', 
  //styleUrls: ['./naturezaoperacaoempresa-grid.component.css'] 
}) 
export class NaturezaOperacaoEmpresaGridComponent extends CommonsGrid<NaturezaOperacaoEmpresa> implements OnInit { 

     constructor(apiService: NaturezaOperacaoEmpresaService, router: Router) { 
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
         filterData.order = 'trb_naturezaoperacaoempresa.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_naturezaoperacaoempresa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_naturezaoperacaoempresa' ; 
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