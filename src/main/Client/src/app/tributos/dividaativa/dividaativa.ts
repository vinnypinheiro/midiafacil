import {DomainBase} from '../../utils/utils'; 

export interface DividaAtiva extends DomainBase { 

     trb_contribuinte_id_id :  number; 
     trb_contribuinte_id_nome :  string; 
     trb_contribuinte_id_codigo :  string; 
     dividaativa_tipocontribuinte: string; 
     trb_tributo_id_id :  number; 
     trb_tributo_id_nome :  string; 
     trb_tributo_id_codigo :  string; 
     trb_tipodividaativa_id_id :  number; 
     trb_tipodividaativa_id_nome :  string; 
     trb_tipodividaativa_id_codigo :  string; 
     dividaativa_datainscricao: Date; 
     dividaativa_processo: string; 
     dividaativa_livro: string; 
     dividaativa_folha: string; 
     dividaativa_ano: number; 
     dividaativa_obs: string; 
}