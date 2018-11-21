import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CertidaoMotivoStatus} from '../certidaomotivostatus'; 
import {CertidaoMotivoStatusService} from '../certidaomotivostatus.service'; 

@Component({ 
  selector: 'gov-certidaomotivostatus-grid', 
  templateUrl: './certidaomotivostatus-grid.component.html', 
  //styleUrls: ['./certidaomotivostatus-grid.component.css'] 
}) 
export class CertidaoMotivoStatusGridComponent extends CommonsGrid<CertidaoMotivoStatus> implements OnInit { 

     constructor(apiService: CertidaoMotivoStatusService, router: Router) { 
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
         filterData.order = 'trb_certidaomotivostatus.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_certidaomotivostatus'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_certidaomotivostatus' ; 
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