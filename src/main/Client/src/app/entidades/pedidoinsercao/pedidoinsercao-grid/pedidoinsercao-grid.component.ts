import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PedidoInsercao} from '../pedidoinsercao'; 
import {PedidoInsercaoService} from '../pedidoinsercao.service'; 

@Component({ 
  selector: 'gov-pedidoinsercao-grid', 
  templateUrl: './pedidoinsercao-grid.component.html', 
  //styleUrls: ['./pedidoinsercao-grid.component.css'] 
}) 
export class PedidoInsercaoGridComponent extends CommonsGrid<PedidoInsercao> implements OnInit { 

     constructor(apiService: PedidoInsercaoService, router: Router) { 
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
         filterData.order = 'pedidoinsercao.codigo, pedidoinsercao.informacoesimportantes, pedidoinsercao.obs, pedidoinsercao.plano_midia_insercao_item_id, pedidoinsercao.agencia_id, pedidoinsercao.cliente_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_pedidoinsercao'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'pedidoinsercao' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('informacoesimportantes','informacoesimportantes','STRING'); 
         retorno[2] = new FieldSearch('obs','obs','STRING'); 
         retorno[3] = new FieldSearch('plano_midia_insercao_item_id','plano_midia_insercao_item_id','NUMBER'); 
         retorno[4] = new FieldSearch('agencia_id','agencia_id','ENUM'); 
         retorno[5] = new FieldSearch('cliente_id','cliente_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}