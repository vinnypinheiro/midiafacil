import {DomainBase} from '../../utils/utils'; 

export interface ParcelamentoTributarioItem extends DomainBase { 

     parcelamentotributarioitem_valor: number; 
     parcelamentotributarioitem_multa: number; 
     parcelamentotributarioitem_juros: number; 
     parcelamentotributarioitem_correcao: number; 
     trb_debitoparcela_id_id :  number; 
     trb_debitoparcela_id_nome :  string; 
     trb_debitoparcela_id_codigo :  string; 
     trb_parcelamentotributario_id_id :  number; 
     trb_parcelamentotributario_id_nome :  string; 
     trb_parcelamentotributario_id_codigo :  string; 
}