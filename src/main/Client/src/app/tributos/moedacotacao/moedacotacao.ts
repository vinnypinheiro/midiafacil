import {DomainBase} from '../../utils/utils'; 

export interface MoedaCotacao extends DomainBase { 

     trb_moeda_id_id :  number; 
     trb_moeda_id_nome :  string; 
     trb_moeda_id_codigo :  string; 
     moedacotacao_datacotacao: Date; 
     moedacotacao_valor: string; 
}