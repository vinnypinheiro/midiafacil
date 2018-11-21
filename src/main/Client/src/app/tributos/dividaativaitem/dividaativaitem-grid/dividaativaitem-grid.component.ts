import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {DividaAtivaItem} from '../dividaativaitem'; 
import {DividaAtivaItemService} from '../dividaativaitem.service'; 

@Component({ 
  selector: 'gov-dividaativaitem-grid', 
  templateUrl: './dividaativaitem-grid.component.html', 
  //styleUrls: ['./dividaativaitem-grid.component.css'] 
}) 
export class DividaAtivaItemGridComponent extends CommonsGrid<DividaAtivaItem> implements OnInit { 

     constructor(apiService: DividaAtivaItemService, router: Router) { 
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
         filterData.order = 'trb_dividaativaitem.trb_dividaativa_id, trb_dividaativaitem.trb_debitoparcela_id, trb_dividaativaitem.valor, trb_dividaativaitem.multa, trb_dividaativaitem.juros, trb_dividaativaitem.correcao, trb_dividaativaitem.atualizacaodata, trb_dividaativaitem.atualizacaomulta, trb_dividaativaitem.atualizacaojuros ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_dividaativaitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_dividaativaitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_dividaativa_id','trb_dividaativa_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_debitoparcela_id','trb_debitoparcela_id','ENUM'); 
         retorno[2] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[3] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[4] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[5] = new FieldSearch('correcao','correcao','NUMBER'); 
         retorno[6] = new FieldSearch('atualizacaodata','atualizacaodata','DATE'); 
         retorno[7] = new FieldSearch('atualizacaomulta','atualizacaomulta','NUMBER'); 
         retorno[8] = new FieldSearch('atualizacaojuros','atualizacaojuros','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}