import {DomainBase} from '../../utils/utils'; 

export interface Servico extends DomainBase { 

     trb_servicogrupo_id_id :  number; 
     trb_servicogrupo_id_nome :  string; 
     trb_servicogrupo_id_codigo :  string; 
     servico_codigo: string; 
     servico_nome: string; 
     servico_aliquota: number; 
     servico_simplesnacional: boolean; 
     servico_retencaoiss: boolean; 
}