import {DomainBase} from '../../utils/utils'; 

export interface DebitoParcela extends DomainBase { 

     debito_id :  number; 
     debito_nome :  string; 
     debito_codigo :  string; 
     debitoparcela_datavencimento: Date; 
     debitoparcela_valor: number; 
     debitoparcela_parcela: number; 
     statusdebito_id :  number; 
     statusdebito_nome :  string; 
     statusdebito_codigo :  string; 
     debitoparcela_obs: string;
}
