import {DomainBase} from '../../utils/utils'; 

export interface ProcessoExecucao extends DomainBase { 

     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     processoexecucao_trb_referencia_id: number; 
     trb_processoexecucaostatus_id_id :  number; 
     trb_processoexecucaostatus_id_nome :  string; 
     trb_processoexecucaostatus_id_codigo :  string; 
     processoexecucao_parecerfiscalizacao: string; 
     processoexecucao_controleprocessoexterno: string; 
     processoexecucao_data: Date; 
     processoexecucao_valor: number; 
     processoexecucao_juros: number; 
     processoexecucao_multa: number; 
     processoexecucao_correcao: number; 
     processoexecucao_numero: string; 
     processoexecucao_obs: string; 
}