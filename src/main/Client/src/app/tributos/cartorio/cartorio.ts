import {DomainBase} from '../../utils/utils'; 

export interface Cartorio extends DomainBase { 

     trb_tipocartorio_id_id :  number; 
     trb_tipocartorio_id_nome :  string; 
     trb_tipocartorio_id_codigo :  string; 
     cartorio_codigo: string; 
     cartorio_nome: string; 
     cartorio_tabeliao: string; 
     cartorio_trb_tipologradouro_id: number; 
     cartorio_logradouro: string; 
     cartorio_numero: string; 
     cartorio_complemento: string; 
     cartorio_bairro: string; 
     trb_cidade_id_id :  number; 
     trb_cidade_id_nome :  string; 
     trb_cidade_id_codigo :  string; 
}