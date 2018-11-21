import {DomainBase} from '../../utils/utils'; 

export interface DividaAtivaItem extends DomainBase { 

     trb_dividaativa_id_id :  number; 
     trb_dividaativa_id_nome :  string; 
     trb_dividaativa_id_codigo :  string; 
     trb_debitoparcela_id_id :  number; 
     trb_debitoparcela_id_nome :  string; 
     trb_debitoparcela_id_codigo :  string; 
     dividaativaitem_valor: number; 
     dividaativaitem_multa: number; 
     dividaativaitem_juros: number; 
     dividaativaitem_correcao: number; 
     dividaativaitem_atualizacaodata: Date; 
     dividaativaitem_atualizacaomulta: number; 
     dividaativaitem_atualizacaojuros: number; 
     dividaativaitem_atualizacaocorrecao: number; 
}