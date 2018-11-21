import {DomainBase} from '../../utils/utils'; 

export interface ProcessoExecucaoHistorico extends DomainBase { 

     trb_processoexecucao_id_id :  number; 
     trb_processoexecucao_id_nome :  string; 
     trb_processoexecucao_id_codigo :  string; 
     trb_processoexecucaostatus_id_id :  number; 
     trb_processoexecucaostatus_id_nome :  string; 
     trb_processoexecucaostatus_id_codigo :  string; 
     processoexecucaohistorico_dataregistro: Date; 
     processoexecucaohistorico_operador: string; 
     processoexecucaohistorico_descricao: string; 
}