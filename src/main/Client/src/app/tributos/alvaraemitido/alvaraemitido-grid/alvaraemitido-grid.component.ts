import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {AlvaraEmitido} from '../alvaraemitido'; 
import {AlvaraEmitidoService} from '../alvaraemitido.service'; 

@Component({ 
  selector: 'gov-alvaraemitido-grid', 
  templateUrl: './alvaraemitido-grid.component.html', 
  //styleUrls: ['./alvaraemitido-grid.component.css'] 
}) 
export class AlvaraEmitidoGridComponent extends CommonsGrid<AlvaraEmitido> implements OnInit { 

     constructor(apiService: AlvaraEmitidoService, router: Router) { 
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
         filterData.order = 'trb_alvaraemitido.tipocontribuinte, trb_alvaraemitido.trb_referencia_id, trb_alvaraemitido.trb_engenheiro_id, trb_alvaraemitido.trb_tipoalvara_id, trb_alvaraemitido.trb_tipousoalvara_id, trb_alvaraemitido.trb_status_id, trb_alvaraemitido.datainicio, trb_alvaraemitido.datafim, trb_alvaraemitido.numero, trb_alvaraemitido.hashcontrol ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_alvaraemitido'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_alvaraemitido' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('tipocontribuinte','tipocontribuinte','STRING'); 
         retorno[1] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[2] = new FieldSearch('trb_engenheiro_id','trb_engenheiro_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_tipoalvara_id','trb_tipoalvara_id','ENUM'); 
         retorno[4] = new FieldSearch('trb_tipousoalvara_id','trb_tipousoalvara_id','ENUM'); 
         retorno[5] = new FieldSearch('trb_status_id','trb_status_id','ENUM'); 
         retorno[6] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[7] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[8] = new FieldSearch('numero','numero','STRING'); 
         retorno[9] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}