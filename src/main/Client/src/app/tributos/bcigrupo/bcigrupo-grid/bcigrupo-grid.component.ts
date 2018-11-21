import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {BciGrupo} from '../bcigrupo'; 
import {BciGrupoService} from '../bcigrupo.service'; 

@Component({ 
  selector: 'gov-bcigrupo-grid', 
  templateUrl: './bcigrupo-grid.component.html', 
  //styleUrls: ['./bcigrupo-grid.component.css'] 
}) 
export class BciGrupoGridComponent extends CommonsGrid<BciGrupo> implements OnInit { 

     constructor(apiService: BciGrupoService, router: Router) { 
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
         filterData.order = 'trb_bcigrupo.trb_bcimodulo_id, trb_bcigrupo.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_bcigrupo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_bcigrupo' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_bcimodulo_id','trb_bcimodulo_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}