import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Departamento} from '../departamento'; 
import {DepartamentoService} from '../departamento.service'; 

@Component({ 
  selector: 'gov-departamento-grid', 
  templateUrl: './departamento-grid.component.html', 
  //styleUrls: ['./departamento-grid.component.css'] 
}) 
export class DepartamentoGridComponent extends CommonsGrid<Departamento> implements OnInit { 

     constructor(apiService: DepartamentoService, router: Router) { 
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
         filterData.order = 'trb_departamento.nome, trb_departamento.codigo '
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_departamento'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_departamento' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_unidadegestora_id','trb_unidadegestora_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}
