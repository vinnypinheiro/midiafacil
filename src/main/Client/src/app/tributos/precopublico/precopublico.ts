import {DomainBase} from '../../utils/utils'; 

export interface PrecoPublico extends DomainBase { 

     trb_referencia_id_id :  number; 
     trb_referencia_id_nome :  string; 
     trb_referencia_id_codigo :  string; 
     trb_tributo_id_id :  number; 
     trb_tributo_id_nome :  string; 
     trb_tributo_id_codigo :  string; 
     precopublico_tipoinscricao: string; 
     precopublico_basecalculo: number; 
     precopublico_datalancamento: Date; 
     precopublico_datavencimento: Date; 
     precopublico_ano: number; 
     precopublico_taxaexpediente: number; 
     precopublico_quantidade: number; 
     precopublico_valorunitario: number; 
     precopublico_valortotal: number; 
     precopublico_obs: string; 
}