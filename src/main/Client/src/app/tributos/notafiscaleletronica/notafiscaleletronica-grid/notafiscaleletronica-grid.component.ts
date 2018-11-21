import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {NotaFiscalEletronica} from '../notafiscaleletronica'; 
import {NotaFiscalEletronicaService} from '../notafiscaleletronica.service'; 

@Component({ 
  selector: 'gov-notafiscaleletronica-grid', 
  templateUrl: './notafiscaleletronica-grid.component.html', 
  //styleUrls: ['./notafiscaleletronica-grid.component.css'] 
}) 
export class NotaFiscalEletronicaGridComponent extends CommonsGrid<NotaFiscalEletronica> implements OnInit { 

     constructor(apiService: NotaFiscalEletronicaService, router: Router) { 
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
         filterData.order = 'trb_notafiscaleletronica.aliquota, trb_notafiscaleletronica.artobra, trb_notafiscaleletronica.assinaturaadmtributaria, trb_notafiscaleletronica.assinaturaprestador, trb_notafiscaleletronica.cnpjcpfintermediario, trb_notafiscaleletronica.codigoobra, trb_notafiscaleletronica.competencia, trb_notafiscaleletronica.datalancamento, trb_notafiscaleletronica.dataoperacao, trb_notafiscaleletronica.datastatus, trb_notafiscaleletronica.descontocondicional, trb_notafiscaleletronica.descontoincondicional, trb_notafiscaleletronica.trb_destinatario_id, trb_notafiscaleletronica.destinatarionome, trb_notafiscaleletronica.destinatarioemail, trb_notafiscaleletronica.destinatariotelefone, trb_notafiscaleletronica.destinatariocep, trb_notafiscaleletronica.trb_destinatariotipologradouro_id, trb_notafiscaleletronica.destinatariologradouro, trb_notafiscaleletronica.destinatarionumero, trb_notafiscaleletronica.destinatariocomplemento, trb_notafiscaleletronica.destinatariobairro, trb_notafiscaleletronica.trb_destinatariocidade_id, trb_notafiscaleletronica.trb_emitente_id, trb_notafiscaleletronica.emitenterazaosocial, trb_notafiscaleletronica.emitentetelefone, trb_notafiscaleletronica.emitentenomefantasia, trb_notafiscaleletronica.emitenteemail, trb_notafiscaleletronica.emitentecep, trb_notafiscaleletronica.trb_emitentetipologradouro_id, trb_notafiscaleletronica.emitentelogradouro, trb_notafiscaleletronica.emitentenumero, trb_notafiscaleletronica.emitentecomplemento, trb_notafiscaleletronica.emitentebairro, trb_notafiscaleletronica.trb_emitentecidade_id, trb_notafiscaleletronica.trb_servico_id, trb_notafiscaleletronica.detalhamentoservico, trb_notafiscaleletronica.trb_empresa_id, trb_notafiscaleletronica.trb_cnae_id, trb_notafiscaleletronica.trb_localservico_id, trb_notafiscaleletronica.trb_municipioincidencia_id, trb_notafiscaleletronica.trb_unidadegestora_id, trb_notafiscaleletronica.trb_regimeespecialtributacao_id, trb_notafiscaleletronica.trb_naturezatributacao_id, trb_notafiscaleletronica.trb_simplesnacional_id, trb_notafiscaleletronica.trb_statusnotafiscal_id, trb_notafiscaleletronica.inscricaomunicipalintermediario, trb_notafiscaleletronica.notasubstituida, trb_notafiscaleletronica.numeroprocesso, trb_notafiscaleletronica.numero, trb_notafiscaleletronica.razaosocialintermediario, trb_notafiscaleletronica.incentivocultural, trb_notafiscaleletronica.incentivofiscal, trb_notafiscaleletronica.issretido, trb_notafiscaleletronica.valor, trb_notafiscaleletronica.valorcofins, trb_notafiscaleletronica.valorcsll, trb_notafiscaleletronica.valordeducoes, trb_notafiscaleletronica.valorinss, trb_notafiscaleletronica.valorirrf, trb_notafiscaleletronica.valoriss, trb_notafiscaleletronica.valoroutrasretencoes, trb_notafiscaleletronica.valorpis, trb_notafiscaleletronica.valorcredito, trb_notafiscaleletronica.valorunitario, trb_notafiscaleletronica.hashcontrol ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_notafiscaleletronica'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_notafiscaleletronica' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[1] = new FieldSearch('artobra','artobra','STRING'); 
         retorno[2] = new FieldSearch('assinaturaadmtributaria','assinaturaadmtributaria','STRING'); 
         retorno[3] = new FieldSearch('assinaturaprestador','assinaturaprestador','STRING'); 
         retorno[4] = new FieldSearch('cnpjcpfintermediario','cnpjcpfintermediario','STRING'); 
         retorno[5] = new FieldSearch('codigoobra','codigoobra','STRING'); 
         retorno[6] = new FieldSearch('competencia','competencia','STRING'); 
         retorno[7] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[8] = new FieldSearch('dataoperacao','dataoperacao','DATE'); 
         retorno[9] = new FieldSearch('datastatus','datastatus','DATE'); 
         retorno[10] = new FieldSearch('descontocondicional','descontocondicional','NUMBER'); 
         retorno[11] = new FieldSearch('descontoincondicional','descontoincondicional','NUMBER'); 
         retorno[12] = new FieldSearch('trb_destinatario_id','trb_destinatario_id','NUMBER'); 
         retorno[13] = new FieldSearch('destinatarionome','destinatarionome','STRING'); 
         retorno[14] = new FieldSearch('destinatarioemail','destinatarioemail','STRING'); 
         retorno[15] = new FieldSearch('destinatariotelefone','destinatariotelefone','STRING'); 
         retorno[16] = new FieldSearch('destinatariocep','destinatariocep','STRING'); 
         retorno[17] = new FieldSearch('trb_destinatariotipologradouro_id','trb_destinatariotipologradouro_id','ENUM'); 
         retorno[18] = new FieldSearch('destinatariologradouro','destinatariologradouro','STRING'); 
         retorno[19] = new FieldSearch('destinatarionumero','destinatarionumero','STRING'); 
         retorno[20] = new FieldSearch('destinatariocomplemento','destinatariocomplemento','STRING'); 
         retorno[21] = new FieldSearch('destinatariobairro','destinatariobairro','STRING'); 
         retorno[22] = new FieldSearch('trb_destinatariocidade_id','trb_destinatariocidade_id','ENUM'); 
         retorno[23] = new FieldSearch('trb_emitente_id','trb_emitente_id','NUMBER'); 
         retorno[24] = new FieldSearch('emitenterazaosocial','emitenterazaosocial','STRING'); 
         retorno[25] = new FieldSearch('emitentetelefone','emitentetelefone','STRING'); 
         retorno[26] = new FieldSearch('emitentenomefantasia','emitentenomefantasia','STRING'); 
         retorno[27] = new FieldSearch('emitenteemail','emitenteemail','STRING'); 
         retorno[28] = new FieldSearch('emitentecep','emitentecep','STRING'); 
         retorno[29] = new FieldSearch('trb_emitentetipologradouro_id','trb_emitentetipologradouro_id','ENUM'); 
         retorno[30] = new FieldSearch('emitentelogradouro','emitentelogradouro','STRING'); 
         retorno[31] = new FieldSearch('emitentenumero','emitentenumero','STRING'); 
         retorno[32] = new FieldSearch('emitentecomplemento','emitentecomplemento','STRING'); 
         retorno[33] = new FieldSearch('emitentebairro','emitentebairro','STRING'); 
         retorno[34] = new FieldSearch('trb_emitentecidade_id','trb_emitentecidade_id','ENUM'); 
         retorno[35] = new FieldSearch('trb_servico_id','trb_servico_id','ENUM'); 
         retorno[36] = new FieldSearch('detalhamentoservico','detalhamentoservico','STRING'); 
         retorno[37] = new FieldSearch('trb_empresa_id','trb_empresa_id','ENUM'); 
         retorno[38] = new FieldSearch('trb_cnae_id','trb_cnae_id','ENUM'); 
         retorno[39] = new FieldSearch('trb_localservico_id','trb_localservico_id','ENUM'); 
         retorno[40] = new FieldSearch('trb_municipioincidencia_id','trb_municipioincidencia_id','ENUM'); 
         retorno[41] = new FieldSearch('trb_unidadegestora_id','trb_unidadegestora_id','ENUM'); 
         retorno[42] = new FieldSearch('trb_regimeespecialtributacao_id','trb_regimeespecialtributacao_id','ENUM'); 
         retorno[43] = new FieldSearch('trb_naturezatributacao_id','trb_naturezatributacao_id','ENUM'); 
         retorno[44] = new FieldSearch('trb_simplesnacional_id','trb_simplesnacional_id','ENUM'); 
         retorno[45] = new FieldSearch('trb_statusnotafiscal_id','trb_statusnotafiscal_id','ENUM'); 
         retorno[46] = new FieldSearch('inscricaomunicipalintermediario','inscricaomunicipalintermediario','STRING'); 
         retorno[47] = new FieldSearch('notasubstituida','notasubstituida','STRING'); 
         retorno[48] = new FieldSearch('numeroprocesso','numeroprocesso','STRING'); 
         retorno[49] = new FieldSearch('numero','numero','STRING'); 
         retorno[50] = new FieldSearch('razaosocialintermediario','razaosocialintermediario','STRING'); 
         retorno[51] = new FieldSearch('incentivocultural','incentivocultural','BOOLEAN'); 
         retorno[52] = new FieldSearch('incentivofiscal','incentivofiscal','BOOLEAN'); 
         retorno[53] = new FieldSearch('issretido','issretido','BOOLEAN'); 
         retorno[54] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[55] = new FieldSearch('valorcofins','valorcofins','NUMBER'); 
         retorno[56] = new FieldSearch('valorcsll','valorcsll','NUMBER'); 
         retorno[57] = new FieldSearch('valordeducoes','valordeducoes','NUMBER'); 
         retorno[58] = new FieldSearch('valorinss','valorinss','NUMBER'); 
         retorno[59] = new FieldSearch('valorirrf','valorirrf','NUMBER'); 
         retorno[60] = new FieldSearch('valoriss','valoriss','NUMBER'); 
         retorno[61] = new FieldSearch('valoroutrasretencoes','valoroutrasretencoes','NUMBER'); 
         retorno[62] = new FieldSearch('valorpis','valorpis','NUMBER'); 
         retorno[63] = new FieldSearch('valorcredito','valorcredito','NUMBER'); 
         retorno[64] = new FieldSearch('valorunitario','valorunitario','NUMBER'); 
         retorno[65] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}