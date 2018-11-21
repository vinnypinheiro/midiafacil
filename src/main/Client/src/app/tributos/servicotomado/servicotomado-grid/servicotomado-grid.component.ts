import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ServicoTomado} from '../servicotomado'; 
import {ServicoTomadoService} from '../servicotomado.service'; 

@Component({ 
  selector: 'gov-servicotomado-grid', 
  templateUrl: './servicotomado-grid.component.html', 
  //styleUrls: ['./servicotomado-grid.component.css'] 
}) 
export class ServicoTomadoGridComponent extends CommonsGrid<ServicoTomado> implements OnInit { 

     constructor(apiService: ServicoTomadoService, router: Router) { 
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
         filterData.order = 'trb_servicotomado.trb_emitente_id, trb_servicotomado.trb_destinatario_id, trb_servicotomado.trb_servico_id, trb_servicotomado.trb_localservico_id, trb_servicotomado.trb_tipodocumentofiscal_id, trb_servicotomado.trb_naturezatributacao_id, trb_servicotomado.trb_moduloservicotomado_id, trb_servicotomado.trb_statusnotafiscal_id, trb_servicotomado.datalancamento, trb_servicotomado.dataoperacao, trb_servicotomado.registro, trb_servicotomado.tiporegistro, trb_servicotomado.aliquota, trb_servicotomado.numero, trb_servicotomado.serie, trb_servicotomado.issretido, trb_servicotomado.valor, trb_servicotomado.valorcofins, trb_servicotomado.valorcsll, trb_servicotomado.valordeducoes, trb_servicotomado.valorinss, trb_servicotomado.valorirrf, trb_servicotomado.valoriss, trb_servicotomado.valoroutrasretencoes, trb_servicotomado.valorpis, trb_servicotomado.valortotal ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_servicotomado'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_servicotomado' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_emitente_id','trb_emitente_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_destinatario_id','trb_destinatario_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_servico_id','trb_servico_id','ENUM'); 
         retorno[3] = new FieldSearch('trb_localservico_id','trb_localservico_id','ENUM'); 
         retorno[4] = new FieldSearch('trb_tipodocumentofiscal_id','trb_tipodocumentofiscal_id','ENUM'); 
         retorno[5] = new FieldSearch('trb_naturezatributacao_id','trb_naturezatributacao_id','ENUM'); 
         retorno[6] = new FieldSearch('trb_moduloservicotomado_id','trb_moduloservicotomado_id','ENUM'); 
         retorno[7] = new FieldSearch('trb_statusnotafiscal_id','trb_statusnotafiscal_id','ENUM'); 
         retorno[8] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[9] = new FieldSearch('dataoperacao','dataoperacao','DATE'); 
         retorno[10] = new FieldSearch('registro','registro','NUMBER'); 
         retorno[11] = new FieldSearch('tiporegistro','tiporegistro','STRING'); 
         retorno[12] = new FieldSearch('aliquota','aliquota','NUMBER'); 
         retorno[13] = new FieldSearch('numero','numero','STRING'); 
         retorno[14] = new FieldSearch('serie','serie','STRING'); 
         retorno[15] = new FieldSearch('issretido','issretido','BOOLEAN'); 
         retorno[16] = new FieldSearch('valor','valor','NUMBER'); 
         retorno[17] = new FieldSearch('valorcofins','valorcofins','NUMBER'); 
         retorno[18] = new FieldSearch('valorcsll','valorcsll','NUMBER'); 
         retorno[19] = new FieldSearch('valordeducoes','valordeducoes','NUMBER'); 
         retorno[20] = new FieldSearch('valorinss','valorinss','NUMBER'); 
         retorno[21] = new FieldSearch('valorirrf','valorirrf','NUMBER'); 
         retorno[22] = new FieldSearch('valoriss','valoriss','NUMBER'); 
         retorno[23] = new FieldSearch('valoroutrasretencoes','valoroutrasretencoes','NUMBER'); 
         retorno[24] = new FieldSearch('valorpis','valorpis','NUMBER'); 
         retorno[25] = new FieldSearch('valortotal','valortotal','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}