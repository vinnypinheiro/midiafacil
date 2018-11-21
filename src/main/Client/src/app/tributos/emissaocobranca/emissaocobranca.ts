import {DomainBase} from '../../utils/utils'; 

export interface EmissaoCobranca extends DomainBase { 

     emissaocobranca_trb_referencia_id: number; 
     trb_bancocontrato_id_id :  number; 
     trb_bancocontrato_id_nome :  string; 
     trb_bancocontrato_id_codigo :  string; 
     emissaocobranca_numero: string; 
     emissaocobranca_dataemissao: Date; 
     emissaocobranca_datavencimento: Date; 
}