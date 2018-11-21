import {DomainBase} from '../../utils/utils'; 

export interface ProcessoExecucaoItem extends DomainBase { 

     trb_processoexecucao_id_id :  number; 
     trb_processoexecucao_id_nome :  string; 
     trb_processoexecucao_id_codigo :  string; 
     trb_dividaativaitem_id_id :  number; 
     trb_dividaativaitem_id_nome :  string; 
     trb_dividaativaitem_id_codigo :  string; 
     processoexecucaoitem_valor: number; 
     processoexecucaoitem_juros: number; 
     processoexecucaoitem_multa: number; 
     processoexecucaoitem_correcao: number; 
}