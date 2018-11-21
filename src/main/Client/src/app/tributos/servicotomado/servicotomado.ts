import {DomainBase} from '../../utils/utils'; 

export interface ServicoTomado extends DomainBase { 

     emitente_id :  number; 
     emitente_nome :  string; 
     emitente_codigo :  string; 
     
     destinatario_id :  number; 
     destinatario_nome :  string; 
     destinatario_codigo :  string; 
     
     servico_id :  number; 
     servico_nome :  string; 
     servico_codigo :  string; 
     
     localservico_id :  number; 
     localservico_nome :  string; 
     localservico_codigo :  string; 
     
     tipodocumentofiscal_id :  number; 
     tipodocumentofiscal_nome :  string; 
     tipodocumentofiscal_codigo :  string; 
     
     naturezatributacao_id :  number; 
     naturezatributacao_nome :  string; 
     naturezatributacao_codigo :  string; 
     
     moduloservicotomado_id :  number; 
     moduloservicotomado_nome :  string; 
     moduloservicotomado_codigo :  string; 
     
     statusnotafiscal_id :  number; 
     statusnotafiscal_nome :  string; 
     statusnotafiscal_codigo :  string; 
     
     servicotomado_datalancamento: Date; 
     servicotomado_dataoperacao: Date; 
     servicotomado_registro: number; 
     servicotomado_tiporegistro: string; 
     servicotomado_aliquota: number; 
     servicotomado_numero: string; 
     servicotomado_serie: string; 
     servicotomado_issretido: boolean; 
     servicotomado_valor: number; 
     servicotomado_valorcofins: number; 
     servicotomado_valorcsll: number; 
     servicotomado_valordeducoes: number; 
     servicotomado_valorinss: number; 
     servicotomado_valorirrf: number; 
     servicotomado_valoriss: number; 
     servicotomado_valoroutrasretencoes: number; 
     servicotomado_valorpis: number; 
     servicotomado_valortotal: number; 
     servicotomado_obs: string; 
}
