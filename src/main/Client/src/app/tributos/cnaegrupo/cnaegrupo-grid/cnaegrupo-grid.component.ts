import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CnaeGrupo} from '../cnaegrupo'; 
import {CnaeGrupoService} from '../cnaegrupo.service'; 

@Component({ 
  selector: 'gov-cnaegrupo-grid', 
  templateUrl: './cnaegrupo-grid.component.html', 
  //styleUrls: ['./cnaegrupo-grid.component.css'] 
}) 
export class CnaeGrupoGridComponent extends CommonsGrid<CnaeGrupo> implements OnInit { 

     constructor(apiService: CnaeGrupoService, router: Router) { 
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
         filterData.order = 'trb_cnaegrupo.trb_cnaedivisao_id, trb_cnaegrupo.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cnaegrupo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cnaegrupo' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_cnaedivisao_id','trb_cnaedivisao_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}