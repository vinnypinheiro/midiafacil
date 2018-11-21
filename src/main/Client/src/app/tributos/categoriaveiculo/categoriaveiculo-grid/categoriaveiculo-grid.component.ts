import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CategoriaVeiculo} from '../categoriaveiculo'; 
import {CategoriaVeiculoService} from '../categoriaveiculo.service'; 

@Component({ 
  selector: 'gov-categoriaveiculo-grid', 
  templateUrl: './categoriaveiculo-grid.component.html', 
  //styleUrls: ['./categoriaveiculo-grid.component.css'] 
}) 
export class CategoriaVeiculoGridComponent extends CommonsGrid<CategoriaVeiculo> implements OnInit { 

     constructor(apiService: CategoriaVeiculoService, router: Router) { 
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
         filterData.order = 'trb_categoriaveiculo.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_categoriaveiculo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_categoriaveiculo' ; 
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