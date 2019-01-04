import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Campanha} from '../campanha'; 
import {CampanhaService} from '../campanha.service';
import {MatPaginator, MatTableDataSource} from "@angular/material";

import { fuseAnimations } from '@fuse/animations';

@Component({ 
  selector: 'gov-campanha-grid', 
  templateUrl: './campanha-grid.component.html', 
  styleUrls: ['./campanha-grid-component.scss'],
    animations   : fuseAnimations,
}) 
export class CampanhaGridComponent extends CommonsGrid<Campanha> implements OnInit {


    public dataList: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource = new MatTableDataSource;
    displayedColumns: string[] = ['ID','cliente', 'campanha', 'inicio', 'fim'];

     constructor(apiService: CampanhaService, router: Router) { 
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
         filterData.order = 'campanha.datafim, campanha.datainicio, campanha.nome ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_campanha'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'campanha' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[1] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[2] = new FieldSearch('nome','nome','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}