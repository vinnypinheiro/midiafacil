import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {PrecoPublico} from '../precopublico'; 
import {PrecoPublicoService} from '../precopublico.service'; 

@Component({ 
  selector: 'gov-precopublico-grid', 
  templateUrl: './precopublico-grid.component.html', 
  //styleUrls: ['./precopublico-grid.component.css'] 
}) 
export class PrecoPublicoGridComponent extends CommonsGrid<PrecoPublico> implements OnInit { 

     constructor(apiService: PrecoPublicoService, router: Router) { 
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
         filterData.order = 'trb_precopublico.trb_referencia_id, trb_precopublico.trb_tributo_id, trb_precopublico.tipoinscricao, trb_precopublico.basecalculo, trb_precopublico.datalancamento, trb_precopublico.datavencimento, trb_precopublico.ano, trb_precopublico.taxaexpediente, trb_precopublico.quantidade, trb_precopublico.valorunitario, trb_precopublico.valortotal ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_precopublico'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_precopublico' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_referencia_id','trb_referencia_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_tributo_id','trb_tributo_id','ENUM'); 
         retorno[2] = new FieldSearch('tipoinscricao','tipoinscricao','STRING'); 
         retorno[3] = new FieldSearch('basecalculo','basecalculo','NUMBER'); 
         retorno[4] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[5] = new FieldSearch('datavencimento','datavencimento','DATE'); 
         retorno[6] = new FieldSearch('ano','ano','NUMBER'); 
         retorno[7] = new FieldSearch('taxaexpediente','taxaexpediente','NUMBER'); 
         retorno[8] = new FieldSearch('quantidade','quantidade','NUMBER'); 
         retorno[9] = new FieldSearch('valorunitario','valorunitario','NUMBER'); 
         retorno[10] = new FieldSearch('valortotal','valortotal','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}