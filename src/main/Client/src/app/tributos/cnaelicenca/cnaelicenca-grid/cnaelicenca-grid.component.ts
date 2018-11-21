import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CnaeLicenca} from '../cnaelicenca'; 
import {CnaeLicencaService} from '../cnaelicenca.service'; 

@Component({ 
  selector: 'gov-cnaelicenca-grid', 
  templateUrl: './cnaelicenca-grid.component.html', 
  //styleUrls: ['./cnaelicenca-grid.component.css'] 
}) 
export class CnaeLicencaGridComponent extends CommonsGrid<CnaeLicenca> implements OnInit { 

     constructor(apiService: CnaeLicencaService, router: Router) { 
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
         filterData.order = 'trb_cnaelicenca.trb_cnae_id, trb_cnaelicenca.vigilanciasanitaria, trb_cnaelicenca.bombeiro ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cnaelicenca'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cnaelicenca' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_cnae_id','trb_cnae_id','ENUM'); 
         retorno[1] = new FieldSearch('vigilanciasanitaria','vigilanciasanitaria','BOOLEAN'); 
         retorno[2] = new FieldSearch('bombeiro','bombeiro','BOOLEAN'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}