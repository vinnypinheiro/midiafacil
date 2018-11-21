import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {VupTerreno} from '../vupterreno'; 
import {VupTerrenoService} from '../vupterreno.service'; 

@Component({ 
  selector: 'gov-vupterreno-grid', 
  templateUrl: './vupterreno-grid.component.html', 
  //styleUrls: ['./vupterreno-grid.component.css'] 
}) 
export class VupTerrenoGridComponent extends CommonsGrid<VupTerreno> implements OnInit { 

     constructor(apiService: VupTerrenoService, router: Router) { 
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
         filterData.order = 'trb_vupterreno.ano, trb_vupterreno.trb_tributo_id, trb_vupterreno.trb_logradourosegmento_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_vupterreno'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_vupterreno' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[1] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_logradourosegmento_id','trb_logradourosegmento_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}