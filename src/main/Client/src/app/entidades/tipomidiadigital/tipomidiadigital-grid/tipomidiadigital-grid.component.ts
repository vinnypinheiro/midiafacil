import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {TipoMidiaDigital} from '../tipomidiadigital'; 
import {TipoMidiaDigitalService} from '../tipomidiadigital.service'; 

@Component({ 
  selector: 'gov-tipomidiadigital-grid', 
  templateUrl: './tipomidiadigital-grid.component.html', 
  //styleUrls: ['./tipomidiadigital-grid.component.css'] 
}) 
export class TipoMidiaDigitalGridComponent extends CommonsGrid<TipoMidiaDigital> implements OnInit { 

     constructor(apiService: TipoMidiaDigitalService, router: Router) { 
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
         filterData.order = ' ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_tipomidiadigital'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'tipomidiadigital' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}