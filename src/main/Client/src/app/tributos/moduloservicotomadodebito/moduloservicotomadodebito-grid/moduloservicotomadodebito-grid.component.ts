import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ModuloServicoTomadoDebito} from '../moduloservicotomadodebito'; 
import {ModuloServicoTomadoDebitoService} from '../moduloservicotomadodebito.service'; 

@Component({ 
  selector: 'gov-moduloservicotomadodebito-grid', 
  templateUrl: './moduloservicotomadodebito-grid.component.html', 
  //styleUrls: ['./moduloservicotomadodebito-grid.component.css'] 
}) 
export class ModuloServicoTomadoDebitoGridComponent extends CommonsGrid<ModuloServicoTomadoDebito> implements OnInit { 

     constructor(apiService: ModuloServicoTomadoDebitoService, router: Router) { 
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
         filterData.order = 'trb_moduloservicotomadodebito.trb_moduloservicotomado_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_moduloservicotomadodebito'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_moduloservicotomadodebito' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_moduloservicotomado_id','trb_moduloservicotomado_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}