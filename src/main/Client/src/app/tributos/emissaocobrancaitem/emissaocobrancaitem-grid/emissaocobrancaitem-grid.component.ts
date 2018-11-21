import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {EmissaoCobrancaItem} from '../emissaocobrancaitem'; 
import {EmissaoCobrancaItemService} from '../emissaocobrancaitem.service'; 

@Component({ 
  selector: 'gov-emissaocobrancaitem-grid', 
  templateUrl: './emissaocobrancaitem-grid.component.html', 
  //styleUrls: ['./emissaocobrancaitem-grid.component.css'] 
}) 
export class EmissaoCobrancaItemGridComponent extends CommonsGrid<EmissaoCobrancaItem> implements OnInit { 

     constructor(apiService: EmissaoCobrancaItemService, router: Router) { 
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
         filterData.order = 'trb_emissaocobrancaitem.trb_emissaocobranca_id, trb_emissaocobrancaitem.trb_debitoparcela_id, trb_emissaocobrancaitem.valor, trb_emissaocobrancaitem.multa, trb_emissaocobrancaitem.juros, trb_emissaocobrancaitem.desconto, trb_emissaocobrancaitem.correcao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_emissaocobrancaitem'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_emissaocobrancaitem' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_emissaocobranca_id','trb_emissaocobranca_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_debitoparcela_id','trb_debitoparcela_id','ENUM'); 
         retorno[2] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[3] = new FieldSearch('multa','multa','NUMBER'); 
         retorno[4] = new FieldSearch('juros','juros','NUMBER'); 
         retorno[5] = new FieldSearch('desconto','desconto','NUMBER'); 
         retorno[6] = new FieldSearch('correcao','correcao','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}