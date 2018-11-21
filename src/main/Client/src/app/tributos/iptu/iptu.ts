import {DomainBase} from '../../utils/utils'; 

export interface Iptu extends DomainBase { 

     iptu_datalancamento: Date; 
     iptu_ano: number; 
     trb_imovel_id_id :  number; 
     trb_imovel_id_nome :  string; 
     trb_imovel_id_codigo :  string; 
     trb_logradouro_id_id :  number; 
     trb_logradouro_id_nome :  string; 
     trb_logradouro_id_codigo :  string; 
     trb_setor_id_id :  number; 
     trb_setor_id_nome :  string; 
     trb_setor_id_codigo :  string; 
     iptu_numero: number; 
     iptu_basecalculo: number; 
     iptu_qtdparcela: number; 
     iptu_aliquota: number; 
     iptu_aliquotareferencia: number; 
     iptu_valor: number; 
     iptu_valorparcela: number; 
     iptu_areaconstrucao: number; 
     iptu_areaterreno: number; 
     iptu_fatorconstrucao: number; 
     iptu_fatorterreno: number; 
     iptu_fracaoideal: number; 
     iptu_tipounidade: number; 
     iptu_valorvenalconstrucao: number; 
     iptu_valorvenalexcedente: number; 
     iptu_valorvenalterreno: number; 
     iptu_vupconstrucao: number; 
     iptu_vupterreno: number; 
     iptu_obs: string; 
}