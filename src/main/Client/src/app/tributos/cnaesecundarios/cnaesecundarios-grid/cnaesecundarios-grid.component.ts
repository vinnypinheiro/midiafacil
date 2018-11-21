import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CnaeSecundarios} from '../cnaesecundarios'; 
import {CnaeSecundariosService} from '../cnaesecundarios.service'; 

@Component({ 
  selector: 'gov-cnaesecundarios-grid', 
  templateUrl: './cnaesecundarios-grid.component.html', 
  //styleUrls: ['./cnaesecundarios-grid.component.css'] 
}) 
export class CnaeSecundariosGridComponent extends CommonsGrid<CnaeSecundarios> implements OnInit { 

     constructor(apiService: CnaeSecundariosService, router: Router) { 
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
         filterData.order = 'trb_cnaesecundarios.trb_cnae_id, trb_cnaesecundarios.trb_empresa_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cnaesecundarios'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cnaesecundarios' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_cnae_id','trb_cnae_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_empresa_id','trb_empresa_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}