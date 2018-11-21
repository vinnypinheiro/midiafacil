import {DomainBase} from '../../utils/utils'; 

export interface CreditoBancario extends DomainBase { 

     trb_banco_id_id :  number; 
     trb_banco_id_nome :  string; 
     trb_banco_id_codigo :  string; 
     trb_status_id_id :  number; 
     trb_status_id_nome :  string; 
     trb_status_id_codigo :  string; 
     creditobancario_nomeempresa: string; 
     creditobancario_header: string; 
     creditobancario_contrato: string; 
     creditobancario_nomearquivo: string; 
     creditobancario_dataarquivo: Date; 
     creditobancario_agencia: string; 
     creditobancario_conta: string; 
     creditobancario_lote: string; 
     creditobancario_qtdregistros: number; 
     creditobancario_trailler: string; 
     creditobancario_valortotal: number; 
}