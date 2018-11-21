import {DomainBase} from '../../utils/utils'; 

export interface Itiv extends DomainBase { 

     itiv_datalancamento: Date; 
     itiv_ano: number; 
     trb_imovel_id_id :  number; 
     trb_imovel_id_nome :  string; 
     trb_imovel_id_codigo :  string; 
     itiv_trb_cartorio_id: number; 
     trb_tramitente_id_id :  number; 
     trb_tramitente_id_nome :  string; 
     trb_tramitente_id_codigo :  string; 
     trb_adquirente_id_id :  number; 
     trb_adquirente_id_nome :  string; 
     trb_adquirente_id_codigo :  string; 
     itiv_numero: string; 
     itiv_itivnatureza: number; 
     itiv_areaconstrucao: number; 
     itiv_registro: string; 
     itiv_folha: string; 
     itiv_livro: string; 
     itiv_status: string; 
     itiv_trb_motivostatus_id: number; 
     itiv_hashcontrol: string; 
     itiv_areaterreno: number; 
     itiv_aliquotaavista: number; 
     itiv_aliquotafinanciado: number; 
     itiv_valoravista: number; 
     itiv_valorfinanciado: number; 
     itiv_valorimposto: number; 
     itiv_valorvenalterreno: number; 
     itiv_valorvenalconstrucao: number; 
     itiv_valorvenalexcedente: number; 
     itiv_valorvenaltotal: number; 
     itiv_obs: string; 
}