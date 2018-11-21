import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {AlvaraVigilanciaSanitaria} from '../alvaravigilanciasanitaria'; 
import {AlvaraVigilanciaSanitariaService} from '../alvaravigilanciasanitaria.service'; 

@Component({ 
  selector: 'gov-alvaravigilanciasanitaria-grid', 
  templateUrl: './alvaravigilanciasanitaria-grid.component.html', 
  //styleUrls: ['./alvaravigilanciasanitaria-grid.component.css'] 
}) 
export class AlvaraVigilanciaSanitariaGridComponent extends CommonsGrid<AlvaraVigilanciaSanitaria> implements OnInit { 

     constructor(apiService: AlvaraVigilanciaSanitariaService, router: Router) { 
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
         filterData.order = 'trb_alvaravigilanciasanitaria.datainicio, trb_alvaravigilanciasanitaria.datafim, trb_alvaravigilanciasanitaria.trb_contribuinte_id, trb_alvaravigilanciasanitaria.trb_responsavellegal_id, trb_alvaravigilanciasanitaria.trb_alvaramotivostatus_id, trb_alvaravigilanciasanitaria.numero, trb_alvaravigilanciasanitaria.hashcontrol ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_alvaravigilanciasanitaria'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_alvaravigilanciasanitaria' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[1] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[2] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_responsavellegal_id','trb_responsavellegal_id','ENUM'); 
         retorno[4] = new FieldSearch('trb_alvaramotivostatus_id','trb_alvaramotivostatus_id','ENUM'); 
         retorno[5] = new FieldSearch('numero','numero','STRING'); 
         retorno[6] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}