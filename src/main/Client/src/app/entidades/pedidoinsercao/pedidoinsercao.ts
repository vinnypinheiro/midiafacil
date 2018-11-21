import {DomainBase} from '../../utils/utils'; 

export interface PedidoInsercao extends DomainBase { 

     codigo: string; 
     informacoesimportantes: string; 
     obs: string; 
     plano_midia_insercao_item_id: number; 
     agencia_id_id :  number; 
     agencia_id_nome :  string; 
     agencia_id_codigo :  string; 
     cliente_id_id :  number; 
     cliente_id_nome :  string; 
     cliente_id_codigo :  string; 
     veiculo_id_id :  number; 
     veiculo_id_nome :  string; 
     veiculo_id_codigo :  string; 
}