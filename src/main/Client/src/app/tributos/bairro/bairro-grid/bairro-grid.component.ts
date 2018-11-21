import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Bairro} from '../bairro'; 
import {BairroService} from '../bairro.service'; 

@Component({ 
  selector: 'gov-bairro-grid', 
  templateUrl: './bairro-grid.component.html', 
  //styleUrls: ['./bairro-grid.component.css'] 
}) 
export class BairroGridComponent extends CommonsGrid<Bairro> implements OnInit { 

     constructor(apiService: BairroService, router: Router) { 
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
         filterData.order = 'trb_bairro.codigo, trb_bairro.nome ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_bairro'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_bairro' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('nome','nome','STRING'); 
         return retorno; 
     }

    getReportList():ReportGroup[]{
      return [];
    }
}
