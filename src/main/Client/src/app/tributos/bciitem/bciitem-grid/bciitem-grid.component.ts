import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {BciItem} from '../bciitem'; 
import {BciItemService} from '../bciitem.service'; 

@Component({ 
  selector: 'gov-bciitem-grid', 
  templateUrl: './bciitem-grid.component.html', 
  //styleUrls: ['./bciitem-grid.component.css'] 
}) 
export class BciItemGridComponent extends CommonsGrid<BciItem> implements OnInit { 

     constructor(apiService: BciItemService, router: Router) { 
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
         filterData.order = 'trb_bciitem.trb_bcigrupo_id, trb_bciitem.codigo, trb_bciitem.nome, trb_bciitem.fator ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_bciitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_bciitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_bcigrupo_id','trb_bcigrupo_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[2] = new FieldSearch('nome','nome','STRING'); 
         retorno[3] = new FieldSearch('fator','fator','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}