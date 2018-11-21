import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ParcelamentoTributarioDebito} from '../parcelamentotributariodebito'; 
import {ParcelamentoTributarioDebitoService} from '../parcelamentotributariodebito.service'; 

@Component({ 
  selector: 'gov-parcelamentotributariodebito-grid', 
  templateUrl: './parcelamentotributariodebito-grid.component.html', 
  //styleUrls: ['./parcelamentotributariodebito-grid.component.css'] 
}) 
export class ParcelamentoTributarioDebitoGridComponent extends CommonsGrid<ParcelamentoTributarioDebito> implements OnInit { 

     constructor(apiService: ParcelamentoTributarioDebitoService, router: Router) { 
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
         filterData.order = 'trb_parcelamentotributariodebito.trb_parcelamentotributario_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_parcelamentotributariodebito'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_parcelamentotributariodebito' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_parcelamentotributario_id','trb_parcelamentotributario_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}