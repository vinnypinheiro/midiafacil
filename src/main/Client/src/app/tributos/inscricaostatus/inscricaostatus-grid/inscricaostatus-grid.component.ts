import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {InscricaoStatus} from '../inscricaostatus'; 
import {InscricaoStatusService} from '../inscricaostatus.service'; 

@Component({ 
  selector: 'gov-inscricaostatus-grid', 
  templateUrl: './inscricaostatus-grid.component.html', 
  //styleUrls: ['./inscricaostatus-grid.component.css'] 
}) 
export class InscricaoStatusGridComponent extends CommonsGrid<InscricaoStatus> implements OnInit { 

     constructor(apiService: InscricaoStatusService, router: Router) { 
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
         filterData.order = 'trb_inscricaostatus.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_inscricaostatus'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_inscricaostatus' ; 
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