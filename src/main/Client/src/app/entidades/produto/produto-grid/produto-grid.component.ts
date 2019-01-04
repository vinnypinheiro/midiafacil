import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Produto} from '../produto'; 
import {ProdutoService} from '../produto.service';


import {fuseAnimations} from "../../../../@fuse/animations";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({ 
  selector: 'gov-produto-grid', 
  templateUrl: './produto-grid.component.html', 
  styleUrls: ['./produto-grid-component.scss'] ,

    animations   : fuseAnimations,
}) 
export class ProdutoGridComponent extends CommonsGrid<Produto> implements OnInit {


    public dataList: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource = new MatTableDataSource;
    displayedColumns: string[] = ['ID','descricao','tipomidia','material', 'formato'];

     constructor(apiService: ProdutoService, router: Router) { 
         super(apiService, router); 
     } 

     ngOnInit() {
         this.dataSource.paginator = this.paginator;
         this.loadByFilter(this.getDefaultFilter());
     }

    loadByFilter(filterData: FilterData) {
        this.apiService.loadByFilter(filterData).subscribe(response => {
            this.dataSource.data = response.content;

            this.activeBean = null;
        });
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