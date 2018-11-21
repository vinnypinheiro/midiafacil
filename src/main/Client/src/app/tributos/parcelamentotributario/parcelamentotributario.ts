import {DomainBase} from '../../utils/utils'; 

export interface ParcelamentoTributario extends DomainBase { 

     parcelamentotributario_trb_referencia_id: number; 
     trb_tipocontribuinte_id_id :  number; 
     trb_tipocontribuinte_id_nome :  string; 
     trb_tipocontribuinte_id_codigo :  string; 
     trb_tributo_id_id :  number; 
     trb_tributo_id_nome :  string; 
     trb_tributo_id_codigo :  string; 
     trb_tipoparcelamentotributario_id_id :  number; 
     trb_tipoparcelamentotributario_id_nome :  string; 
     trb_tipoparcelamentotributario_id_codigo :  string; 
     parcelamentotributario_datalancamento: Date; 
     parcelamentotributario_processo: string; 
     parcelamentotributario_numeroprocessojudicial: string; 
     parcelamentotributario_numerocda: string; 
     parcelamentotributario_percentrada: number; 
     parcelamentotributario_qtdparcelas: number; 
     parcelamentotributario_valor: number; 
     parcelamentotributario_valorentrada: number; 
     parcelamentotributario_valorfinanciado: number; 
     parcelamentotributario_valorparcelas: number; 
     parcelamentotributario_multa: number; 
     parcelamentotributario_juros: number; 
     parcelamentotributario_correcao: number; 
     parcelamentotributario_descontovalor: number; 
     parcelamentotributario_descontomulta: number; 
     parcelamentotributario_descontojuros: number; 
     parcelamentotributario_descontocorrecao: number; 
     parcelamentotributario_cancelado: boolean; 
     parcelamentotributario_hashcontrol: string; 
     parcelamentotributario_obs: string; 
}