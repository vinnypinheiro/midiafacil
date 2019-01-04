import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PedidoInsercaoItem} from '../pedidoinsercaoitem'; 
import {PedidoInsercaoItemService} from '../pedidoinsercaoitem.service'; 

@Component({ 
  selector: 'gov-pedidoinsercaoitem-grid', 
  templateUrl: './pedidoinsercaoitem-grid.component.html', 
  //styleUrls: ['./pedidoinsercaoitem-grid.component.css'] 
}) 
export class PedidoInsercaoItemGridComponent extends CommonsGrid<PedidoInsercaoItem> implements OnInit { 

     constructor(apiService: PedidoInsercaoItemService, router: Router) { 
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
         filterData.order = 'pedidoinsercaoitem.data, pedidoinsercaoitem.desconto, pedidoinsercaoitem.dia01, pedidoinsercaoitem.dia02, pedidoinsercaoitem.dia03, pedidoinsercaoitem.dia04, pedidoinsercaoitem.dia05, pedidoinsercaoitem.dia06, pedidoinsercaoitem.dia07, pedidoinsercaoitem.dia08, pedidoinsercaoitem.dia09, pedidoinsercaoitem.dia10, pedidoinsercaoitem.dia11, pedidoinsercaoitem.dia12, pedidoinsercaoitem.dia13, pedidoinsercaoitem.dia14, pedidoinsercaoitem.dia15, pedidoinsercaoitem.dia16, pedidoinsercaoitem.dia17, pedidoinsercaoitem.dia18, pedidoinsercaoitem.dia19, pedidoinsercaoitem.dia20, pedidoinsercaoitem.dia21, pedidoinsercaoitem.dia22, pedidoinsercaoitem.dia23, pedidoinsercaoitem.dia24, pedidoinsercaoitem.dia25, pedidoinsercaoitem.dia26, pedidoinsercaoitem.dia27, pedidoinsercaoitem.dia28, pedidoinsercaoitem.dia29, pedidoinsercaoitem.dia30, pedidoinsercaoitem.dia31, pedidoinsercaoitem.faturamento, pedidoinsercaoitem.obs, pedidoinsercaoitem.qtd, pedidoinsercaoitem.valor, pedidoinsercaoitem.vencimento, pedidoinsercaoitem.pedidoinsercao_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_pedidoinsercaoitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'pedidoinsercaoitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('data','data','DATE'); 
         retorno[1] = new FieldSearch('desconto','desconto','NUMBER'); 
         retorno[2] = new FieldSearch('dia01','dia01','NUMBER'); 
         retorno[3] = new FieldSearch('dia02','dia02','NUMBER'); 
         retorno[4] = new FieldSearch('dia03','dia03','NUMBER'); 
         retorno[5] = new FieldSearch('dia04','dia04','NUMBER'); 
         retorno[6] = new FieldSearch('dia05','dia05','NUMBER'); 
         retorno[7] = new FieldSearch('dia06','dia06','NUMBER'); 
         retorno[8] = new FieldSearch('dia07','dia07','NUMBER'); 
         retorno[9] = new FieldSearch('dia08','dia08','NUMBER'); 
         retorno[10] = new FieldSearch('dia09','dia09','NUMBER'); 
         retorno[11] = new FieldSearch('dia10','dia10','NUMBER'); 
         retorno[12] = new FieldSearch('dia11','dia11','NUMBER'); 
         retorno[13] = new FieldSearch('dia12','dia12','NUMBER'); 
         retorno[14] = new FieldSearch('dia13','dia13','NUMBER'); 
         retorno[15] = new FieldSearch('dia14','dia14','NUMBER'); 
         retorno[16] = new FieldSearch('dia15','dia15','NUMBER'); 
         retorno[17] = new FieldSearch('dia16','dia16','NUMBER'); 
         retorno[18] = new FieldSearch('dia17','dia17','NUMBER'); 
         retorno[19] = new FieldSearch('dia18','dia18','NUMBER'); 
         retorno[20] = new FieldSearch('dia19','dia19','NUMBER'); 
         retorno[21] = new FieldSearch('dia20','dia20','NUMBER'); 
         retorno[22] = new FieldSearch('dia21','dia21','NUMBER'); 
         retorno[23] = new FieldSearch('dia22','dia22','NUMBER'); 
         retorno[24] = new FieldSearch('dia23','dia23','NUMBER'); 
         retorno[25] = new FieldSearch('dia24','dia24','NUMBER'); 
         retorno[26] = new FieldSearch('dia25','dia25','NUMBER'); 
         retorno[27] = new FieldSearch('dia26','dia26','NUMBER'); 
         retorno[28] = new FieldSearch('dia27','dia27','NUMBER'); 
         retorno[29] = new FieldSearch('dia28','dia28','NUMBER'); 
         retorno[30] = new FieldSearch('dia29','dia29','NUMBER'); 
         retorno[31] = new FieldSearch('dia30','dia30','NUMBER'); 
         retorno[32] = new FieldSearch('dia31','dia31','NUMBER'); 
         retorno[33] = new FieldSearch('faturamento','faturamento','DATE'); 
         retorno[34] = new FieldSearch('obs','obs','STRING'); 
         retorno[35] = new FieldSearch('qtd','qtd','NUMBER'); 
         retorno[36] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[37] = new FieldSearch('vencimento','vencimento','DATE'); 
         retorno[38] = new FieldSearch('pedidoinsercao_id','pedidoinsercao_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}