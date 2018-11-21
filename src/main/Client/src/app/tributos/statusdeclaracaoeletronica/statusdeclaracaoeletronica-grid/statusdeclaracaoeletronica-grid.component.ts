import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {StatusDeclaracaoEletronica} from '../statusdeclaracaoeletronica'; 
import {StatusDeclaracaoEletronicaService} from '../statusdeclaracaoeletronica.service'; 

@Component({ 
  selector: 'gov-statusdeclaracaoeletronica-grid', 
  templateUrl: './statusdeclaracaoeletronica-grid.component.html', 
  //styleUrls: ['./statusdeclaracaoeletronica-grid.component.css'] 
}) 
export class StatusDeclaracaoEletronicaGridComponent extends CommonsGrid<StatusDeclaracaoEletronica> implements OnInit { 

     constructor(apiService: StatusDeclaracaoEletronicaService, router: Router) { 
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
         filterData.order = 'trb_statusdeclaracaoeletronica.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_statusdeclaracaoeletronica'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_statusdeclaracaoeletronica' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}