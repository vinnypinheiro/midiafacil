import {DomainBase} from '../../utils/utils'; 

export interface EmissaoCobrancaItem extends DomainBase { 

     trb_emissaocobranca_id_id :  number; 
     trb_emissaocobranca_id_nome :  string; 
     trb_emissaocobranca_id_codigo :  string; 
     trb_debitoparcela_id_id :  number; 
     trb_debitoparcela_id_nome :  string; 
     trb_debitoparcela_id_codigo :  string; 
     emissaocobrancaitem_valor: number; 
     emissaocobrancaitem_multa: number; 
     emissaocobrancaitem_juros: number; 
     emissaocobrancaitem_desconto: number; 
     emissaocobrancaitem_correcao: number; 
     emissaocobrancaitem_honorarioadvocaticio: number; 
}