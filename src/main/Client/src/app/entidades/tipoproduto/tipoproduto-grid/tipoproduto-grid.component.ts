import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoProduto} from '../tipoproduto'; 
import {TipoProdutoService} from '../tipoproduto.service'; 

@Component({ 
  selector: 'gov-tipoproduto-grid', 
  templateUrl: './tipoproduto-grid.component.html', 
  //styleUrls: ['./tipoproduto-grid.component.css'] 
}) 
export class TipoProdutoGridComponent extends CommonsGrid<TipoProduto> implements OnInit { 

     constructor(apiService: TipoProdutoService, router: Router) { 
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
         filterData.order = ' ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipoproduto'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'tipoproduto' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}