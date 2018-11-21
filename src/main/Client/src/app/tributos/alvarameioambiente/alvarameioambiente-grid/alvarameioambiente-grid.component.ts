import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {AlvaraMeioAmbiente} from '../alvarameioambiente'; 
import {AlvaraMeioAmbienteService} from '../alvarameioambiente.service'; 

@Component({ 
  selector: 'gov-alvarameioambiente-grid', 
  templateUrl: './alvarameioambiente-grid.component.html', 
  //styleUrls: ['./alvarameioambiente-grid.component.css'] 
}) 
export class AlvaraMeioAmbienteGridComponent extends CommonsGrid<AlvaraMeioAmbiente> implements OnInit { 

     constructor(apiService: AlvaraMeioAmbienteService, router: Router) { 
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
         filterData.order = 'trb_alvarameioambiente.datainicio, trb_alvarameioambiente.datafim, trb_alvarameioambiente.trb_contribuinte_id, trb_alvarameioambiente.trb_alvaramotivostatus_id, trb_alvarameioambiente.numero, trb_alvarameioambiente.hashcontrol ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_alvarameioambiente'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_alvarameioambiente' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[1] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[2] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_alvaramotivostatus_id','trb_alvaramotivostatus_id','ENUM'); 
         retorno[4] = new FieldSearch('numero','numero','STRING'); 
         retorno[5] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}