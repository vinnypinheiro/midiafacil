import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {NotaFiscalAvulsa} from '../notafiscalavulsa'; 
import {NotaFiscalAvulsaService} from '../notafiscalavulsa.service'; 

@Component({ 
  selector: 'gov-notafiscalavulsa-grid', 
  templateUrl: './notafiscalavulsa-grid.component.html', 
  //styleUrls: ['./notafiscalavulsa-grid.component.css'] 
}) 
export class NotaFiscalAvulsaGridComponent extends CommonsGrid<NotaFiscalAvulsa> implements OnInit { 

     constructor(apiService: NotaFiscalAvulsaService, router: Router) { 
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
         filterData.order = 'trb_notafiscalavulsa.datalancamento, trb_notafiscalavulsa.dataoperacao, trb_notafiscalavulsa.datastatus, trb_notafiscalavulsa.competencia, trb_notafiscalavulsa.trb_destinatario_id, trb_notafiscalavulsa.destinatarionome, trb_notafiscalavulsa.destinatarioemail, trb_notafiscalavulsa.destinatariotelefone, trb_notafiscalavulsa.destinatariocep, trb_notafiscalavulsa.trb_destinatariotipologradouro_id, trb_notafiscalavulsa.destinatariologradouro, trb_notafiscalavulsa.destinatarionumero, trb_notafiscalavulsa.destinatariocomplemento, trb_notafiscalavulsa.destinatariobairro, trb_notafiscalavulsa.trb_destinatariocidade_id, trb_notafiscalavulsa.trb_emitente_id, trb_notafiscalavulsa.emitentenome, trb_notafiscalavulsa.emitenteemail, trb_notafiscalavulsa.emitentetelefone, trb_notafiscalavulsa.emitentecep, trb_notafiscalavulsa.trb_emitentetipologradouro_id, trb_notafiscalavulsa.emitentelogradouro, trb_notafiscalavulsa.emitentenumero, trb_notafiscalavulsa.emitentecomplemento, trb_notafiscalavulsa.emitentebairro, trb_notafiscalavulsa.trb_emitentecidade_id, trb_notafiscalavulsa.trb_servico_id, trb_notafiscalavulsa.aliquota, trb_notafiscalavulsa.valor, trb_notafiscalavulsa.valorpis, trb_notafiscalavulsa.valorcofins, trb_notafiscalavulsa.valorcsll, trb_notafiscalavulsa.valorinss, trb_notafiscalavulsa.valorirrf, trb_notafiscalavulsa.valoriss, trb_notafiscalavulsa.valordeducoes, trb_notafiscalavulsa.valoroutrasretencoes, trb_notafiscalavulsa.descontocondicional, trb_notafiscalavulsa.descontoincondicional, trb_notafiscalavulsa.notasubstituida, trb_notafiscalavulsa.trb_statusnotafiscal_id, trb_notafiscalavulsa.issretido, trb_notafiscalavulsa.trb_unidadegestora_id, trb_notafiscalavulsa.trb_localservico_id, trb_notafiscalavulsa.numero, trb_notafiscalavulsa.obs ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_notafiscalavulsa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_notafiscalavulsa' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[1] = new FieldSearch('dataoperacao','dataoperacao','DATE'); 
         retorno[2] = new FieldSearch('datastatus','datastatus','DATE'); 
         retorno[3] = new FieldSearch('competencia','competencia','STRING'); 
         retorno[4] = new FieldSearch('trb_destinatario_id','trb_destinatario_id','ENUM'); 
         retorno[5] = new FieldSearch('destinatarionome','destinatarionome','STRING'); 
         retorno[6] = new FieldSearch('destinatarioemail','destinatarioemail','STRING'); 
         retorno[7] = new FieldSearch('destinatariotelefone','destinatariotelefone','STRING'); 
         retorno[8] = new FieldSearch('destinatariocep','destinatariocep','STRING'); 
         retorno[9] = new FieldSearch('trb_destinatariotipologradouro_id','trb_destinatariotipologradouro_id','ENUM'); 
         retorno[10] = new FieldSearch('destinatariologradouro','destinatariologradouro','STRING'); 
         retorno[11] = new FieldSearch('destinatarionumero','destinatarionumero','STRING'); 
         retorno[12] = new FieldSearch('destinatariocomplemento','destinatariocomplemento','STRING'); 
         retorno[13] = new FieldSearch('destinatariobairro','destinatariobairro','STRING'); 
         retorno[14] = new FieldSearch('trb_destinatariocidade_id','trb_destinatariocidade_id','ENUM'); 
         retorno[15] = new FieldSearch('trb_emitente_id','trb_emitente_id','ENUM'); 
         retorno[16] = new FieldSearch('emitentenome','emitentenome','STRING'); 
         retorno[17] = new FieldSearch('emitenteemail','emitenteemail','STRING'); 
         retorno[18] = new FieldSearch('emitentetelefone','emitentetelefone','STRING'); 
         retorno[19] = new FieldSearch('emitentecep','emitentecep','STRING'); 
         retorno[20] = new FieldSearch('trb_emitentetipologradouro_id','trb_emitentetipologradouro_id','ENUM'); 
         retorno[21] = new FieldSearch('emitentelogradouro','emitentelogradouro','STRING'); 
         retorno[22] = new FieldSearch('emitentenumero','emitentenumero','STRING'); 
         retorno[23] = new FieldSearch('emitentecomplemento','emitentecomplemento','STRING'); 
         retorno[24] = new FieldSearch('emitentebairro','emitentebairro','STRING'); 
         retorno[25] = new FieldSearch('trb_emitentecidade_id','trb_emitentecidade_id','ENUM'); 
         retorno[26] = new FieldSearch('trb_servico_id','trb_servico_id','ENUM'); 
         retorno[27] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[28] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[29] = new FieldSearch('valorpis','valorpis','NUMBER'); 
         retorno[30] = new FieldSearch('valorcofins','valorcofins','NUMBER'); 
         retorno[31] = new FieldSearch('valorcsll','valorcsll','NUMBER'); 
         retorno[32] = new FieldSearch('valorinss','valorinss','NUMBER'); 
         retorno[33] = new FieldSearch('valorirrf','valorirrf','NUMBER'); 
         retorno[34] = new FieldSearch('valoriss','valoriss','NUMBER'); 
         retorno[35] = new FieldSearch('valordeducoes','valordeducoes','NUMBER'); 
         retorno[36] = new FieldSearch('valoroutrasretencoes','valoroutrasretencoes','NUMBER'); 
         retorno[37] = new FieldSearch('descontocondicional','descontocondicional','NUMBER'); 
         retorno[38] = new FieldSearch('descontoincondicional','descontoincondicional','NUMBER'); 
         retorno[39] = new FieldSearch('notasubstituida','notasubstituida','STRING'); 
         retorno[40] = new FieldSearch('trb_statusnotafiscal_id','trb_statusnotafiscal_id','ENUM'); 
         retorno[41] = new FieldSearch('issretido','issretido','BOOLEAN'); 
         retorno[42] = new FieldSearch('trb_unidadegestora_id','trb_unidadegestora_id','ENUM'); 
         retorno[43] = new FieldSearch('trb_localservico_id','trb_localservico_id','ENUM'); 
         retorno[44] = new FieldSearch('numero','numero','STRING'); 
         retorno[45] = new FieldSearch('obs','obs','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}