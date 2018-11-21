import {DomainBase} from '../../utils/utils'; 

export interface BciItem extends DomainBase { 

     trb_bcigrupo_id_id :  number; 
     trb_bcigrupo_id_nome :  string; 
     trb_bcigrupo_id_codigo :  string; 
     bciitem_codigo: string; 
     bciitem_nome: string; 
     bciitem_fator: number; 
     bciitem_preferencial: boolean; 
}