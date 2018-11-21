import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PadraoConstrutivo} from '../padraoconstrutivo'; 
import {PadraoConstrutivoService} from '../padraoconstrutivo.service'; 

@Component({ 
  selector: 'gov-padraoconstrutivo-grid', 
  templateUrl: './padraoconstrutivo-grid.component.html', 
  //styleUrls: ['./padraoconstrutivo-grid.component.css'] 
}) 
export class PadraoConstrutivoGridComponent extends CommonsGrid<PadraoConstrutivo> implements OnInit { 

     constructor(apiService: PadraoConstrutivoService, router: Router) { 
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
         filterData.order = 'trb_padraoconstrutivo.codigo ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_padraoconstrutivo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_padraoconstrutivo' ; 
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