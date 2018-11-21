import {DomainBase} from '../../utils/utils'; 

export interface ConcessaoTransporte extends DomainBase { 

     veiculo_id :  number;
     veiculo_nome :  string;
     veiculo_codigo :  string;

     concessaotransporte_linha: string; 
     concessaotransporte_ponto: string; 
}
