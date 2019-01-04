import {DomainBase} from '../../utils/utils'; 

export interface MailPi extends DomainBase { 

     assunto: string; 
     dataenvio: Date; 
     para: string; 
     veiculo_id_id :  number; 
     veiculo_id_nome :  string; 
     veiculo_id_codigo :  string; 
}