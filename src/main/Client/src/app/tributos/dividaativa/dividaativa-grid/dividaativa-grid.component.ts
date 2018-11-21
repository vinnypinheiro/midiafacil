import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {DividaAtiva} from '../dividaativa'; 
import {DividaAtivaService} from '../dividaativa.service'; 

@Component({ 
  selector: 'gov-dividaativa-grid', 
  templateUrl: './dividaativa-grid.component.html', 
  //styleUrls: ['./dividaativa-grid.component.css'] 
}) 
export class DividaAtivaGridComponent extends CommonsGrid<DividaAtiva> implements OnInit { 

     constructor(apiService: DividaAtivaService, router: Router) { 
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
         filterData.order = 'trb_dividaativa.trb_contribuinte_id, trb_dividaativa.tipocontribuinte, trb_dividaativa.trb_tributo_id, trb_dividaativa.trb_tipodividaativa_id, trb_dividaativa.datainscricao, trb_dividaativa.processo, trb_dividaativa.livro, trb_dividaativa.folha, trb_dividaativa.ano ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_dividaativa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_dividaativa' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[1] = new FieldSearch('tipocontribuinte','tipocontribuinte','STRING'); 
         retorno[2] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_tipodividaativa_id','trb_tipodividaativa_id','ENUM'); 
         retorno[4] = new FieldSearch('datainscricao','datainscricao','DATE'); 
         retorno[5] = new FieldSearch('processo','processo','STRING'); 
         retorno[6] = new FieldSearch('livro','livro','STRING'); 
         retorno[7] = new FieldSearch('folha','folha','STRING'); 
         retorno[8] = new FieldSearch('ano','ano','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}