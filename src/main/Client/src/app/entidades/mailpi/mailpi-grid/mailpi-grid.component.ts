import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {MailPi} from '../mailpi'; 
import {MailPiService} from '../mailpi.service'; 

@Component({ 
  selector: 'gov-mailpi-grid', 
  templateUrl: './mailpi-grid.component.html', 
  //styleUrls: ['./mailpi-grid.component.css'] 
}) 
export class MailPiGridComponent extends CommonsGrid<MailPi> implements OnInit { 

     constructor(apiService: MailPiService, router: Router) { 
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
         filterData.order = 'mailpi.assunto, mailpi.dataenvio, mailpi.para ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_mailpi'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'mailpi' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('assunto','assunto','STRING'); 
         retorno[1] = new FieldSearch('dataenvio','dataenvio','DATE'); 
         retorno[2] = new FieldSearch('para','para','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}