import {DomainBase} from '../../utils/utils'; 

export interface ModuloServicoTomado extends DomainBase { 

     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     trb_responsavel_id_id :  number; 
     trb_responsavel_id_nome :  string; 
     trb_responsavel_id_codigo :  string; 
     trb_tipodeclarante_id_id :  number; 
     trb_tipodeclarante_id_nome :  string; 
     trb_tipodeclarante_id_codigo :  string; 
     moduloservicotomado_datadeclaracao: Date; 
     trb_tipodeclaracao_id_id :  number; 
     trb_tipodeclaracao_id_nome :  string; 
     trb_tipodeclaracao_id_codigo :  string; 
     trb_statusdeclaracaoeletronica_id_id :  number; 
     trb_statusdeclaracaoeletronica_id_nome :  string; 
     trb_statusdeclaracaoeletronica_id_codigo :  string; 
     moduloservicotomado_protocolo: string; 
     moduloservicotomado_protocoloanterior: string; 
     moduloservicotomado_versao: string; 
     moduloservicotomado_competencia: number; 
}