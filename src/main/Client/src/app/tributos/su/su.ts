import {DomainBase} from '../../utils/utils'; 

export interface Su extends DomainBase { 

     trb_logradouro_id_id :  number; 
     trb_logradouro_id_nome :  string; 
     trb_logradouro_id_codigo :  string; 
     trb_imovel_id_id :  number; 
     trb_imovel_id_nome :  string; 
     trb_imovel_id_codigo :  string; 
     trb_setor_id_id :  number; 
     trb_setor_id_nome :  string; 
     trb_setor_id_codigo :  string; 
     su_tipounidade: number; 
     su_areaconstrucao: number; 
     su_areaterreno: number; 
     su_fatorconstrucao: number; 
     su_fatorterreno: number; 
     su_fracaoideal: number; 
     su_valorvenalconstrucao: number; 
     su_valorvenalexcedente: number; 
     su_valorvenalterreno: number; 
     su_vupconstrucao: number; 
     su_vupterreno: number; 
     su_datalancamento: Date; 
     su_ano: number; 
     su_aliquota: number; 
     su_aliquotareferencia: number; 
     su_basecalculo: number; 
     su_qtdparcela: number; 
     su_valor: number; 
     su_valorparcela: number; 
     su_numero: number; 
     su_obs: string; 
}