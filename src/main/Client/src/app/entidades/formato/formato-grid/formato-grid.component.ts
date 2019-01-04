import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Formato} from '../formato'; 
import {FormatoService} from '../formato.service';
import {fuseAnimations} from "../../../../@fuse/animations";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({ 
  selector: 'gov-formato-grid', 
  templateUrl: './formato-grid.component.html', 
  styleUrls: ['./formato-grid-component.scss'] ,
    animations   : fuseAnimations,
}) 
export class FormatoGridComponent extends CommonsGrid<Formato> implements OnInit {


    public dataList: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource = new MatTableDataSource;
    displayedColumns: string[] = ['ID','nome'];

     constructor(apiService: FormatoService, router: Router) { 
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
         filterData.order = 'formato.nome ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_formato'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'formato' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('nome','nome','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}