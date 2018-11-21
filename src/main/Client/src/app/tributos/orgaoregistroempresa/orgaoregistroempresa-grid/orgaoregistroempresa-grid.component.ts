import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {OrgaoRegistroEmpresa} from '../orgaoregistroempresa'; 
import {OrgaoRegistroEmpresaService} from '../orgaoregistroempresa.service'; 

@Component({ 
  selector: 'gov-orgaoregistroempresa-grid', 
  templateUrl: './orgaoregistroempresa-grid.component.html', 
  //styleUrls: ['./orgaoregistroempresa-grid.component.css'] 
}) 
export class OrgaoRegistroEmpresaGridComponent extends CommonsGrid<OrgaoRegistroEmpresa> implements OnInit { 

     constructor(apiService: OrgaoRegistroEmpresaService, router: Router) { 
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
         filterData.order = 'trb_orgaoregistroempresa.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_orgaoregistroempresa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_orgaoregistroempresa' ; 
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