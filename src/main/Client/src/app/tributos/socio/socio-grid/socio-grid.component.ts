import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Socio} from '../socio'; 
import {SocioService} from '../socio.service'; 

@Component({ 
  selector: 'gov-socio-grid', 
  templateUrl: './socio-grid.component.html', 
  //styleUrls: ['./socio-grid.component.css'] 
}) 
export class SocioGridComponent extends CommonsGrid<Socio> implements OnInit { 

     constructor(apiService: SocioService, router: Router) { 
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
         filterData.order = 'trb_socio.trb_empresa_id, trb_socio.trb_contribuinte_id, trb_socio.cargo, trb_socio.datainicio, trb_socio.datafim, trb_socio.representante ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_socio'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_socio' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_empresa_id','trb_empresa_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[2] = new FieldSearch('cargo','cargo','STRING'); 
         retorno[3] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[4] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[5] = new FieldSearch('representante','representante','BOOLEAN'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}