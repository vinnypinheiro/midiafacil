import {DomainBase} from '../../utils/utils'; 

export interface EmpresaServico extends DomainBase { 

     trb_empresa_id_id :  number; 
     trb_empresa_id_nome :  string; 
     trb_empresa_id_codigo :  string; 
     trb_servico_id_id :  number; 
     trb_servico_id_nome :  string; 
     trb_servico_id_codigo :  string; 
}