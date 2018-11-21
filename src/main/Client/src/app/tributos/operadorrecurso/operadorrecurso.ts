import {DomainBase} from '../../utils/utils'; 

export interface OperadorRecurso extends DomainBase { 

     operadorrecurso_deletar: boolean; 
     operadorrecurso_inserir: boolean; 
     operadorrecurso_atualizar: boolean; 
     operadorrecurso_consultar: boolean; 
     operadorrecurso_report: boolean; 
     trb_operador_id_id :  number; 
     trb_operador_id_nome :  string; 
     trb_operador_id_codigo :  string; 
     trb_unidadegestora_id_id :  number; 
     trb_unidadegestora_id_nome :  string; 
     trb_unidadegestora_id_codigo :  string; 
     trb_recursosistema_id_id :  number; 
     trb_recursosistema_id_nome :  string; 
     trb_recursosistema_id_codigo :  string; 
}