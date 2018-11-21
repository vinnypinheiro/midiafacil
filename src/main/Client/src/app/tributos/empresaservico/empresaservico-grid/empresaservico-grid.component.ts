import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {EmpresaServico} from '../empresaservico'; 
import {EmpresaServicoService} from '../empresaservico.service'; 

@Component({ 
  selector: 'gov-empresaservico-grid', 
  templateUrl: './empresaservico-grid.component.html', 
  //styleUrls: ['./empresaservico-grid.component.css'] 
}) 
export class EmpresaServicoGridComponent extends CommonsGrid<EmpresaServico> implements OnInit { 

     constructor(apiService: EmpresaServicoService, router: Router) { 
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
         filterData.order = 'trb_empresaservico.trb_empresa_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_empresaservico'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_empresaservico' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_empresa_id','trb_empresa_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}