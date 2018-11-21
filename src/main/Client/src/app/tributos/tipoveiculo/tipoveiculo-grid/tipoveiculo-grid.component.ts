import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoVeiculo} from '../tipoveiculo'; 
import {TipoVeiculoService} from '../tipoveiculo.service'; 

@Component({ 
  selector: 'gov-tipoveiculo-grid', 
  templateUrl: './tipoveiculo-grid.component.html', 
  //styleUrls: ['./tipoveiculo-grid.component.css'] 
}) 
export class TipoVeiculoGridComponent extends CommonsGrid<TipoVeiculo> implements OnInit { 

     constructor(apiService: TipoVeiculoService, router: Router) { 
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
         filterData.order = 'trb_tipoveiculo.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipoveiculo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_tipoveiculo' ; 
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