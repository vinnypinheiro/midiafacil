import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Produto} from '../produto'; 
import {ProdutoService} from '../produto.service'; 

@Component({ 
  selector: 'gov-produto-grid', 
  templateUrl: './produto-grid.component.html', 
  //styleUrls: ['./produto-grid.component.css'] 
}) 
export class ProdutoGridComponent extends CommonsGrid<Produto> implements OnInit { 

     constructor(apiService: ProdutoService, router: Router) { 
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
         filterData.order = 'produto.descricao, produto.midia, produto.preco, produto.formato_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_produto'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'produto' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('descricao','descricao','STRING'); 
         retorno[1] = new FieldSearch('midia','midia','STRING'); 
         retorno[2] = new FieldSearch('preco','preco','NUMBER'); 
         retorno[3] = new FieldSearch('formato_id','formato_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}