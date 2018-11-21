import {DomainBase} from '../../utils/utils'; 

export interface Condominio extends DomainBase { 

  condominio_id: number;
  condominio_codigo: string; 
  condominio_nome: string;
  condominio_datacadastro: Date; 
  condominio_arealote: number; 
  condominio_areaedificacao: number; 
  condominio_areacomum: number; 
  condominio_areaprivativa: number; 
  condominio_areacoberta: number; 
  condominio_areacobertacomum: number; 
  condominio_areacobertaprivativa: number; 
  condominio_areadescoberta: number; 
  condominio_areadescobertacomum: number; 
  condominio_areadescobertaprivativa: number; 
  condominio_areamezanino: number; 
  condominio_areamezaninocomum: number; 
  condominio_areamezaninoprivativo: number; 
  condominio_vagasgaragem: number; 
  condominio_vagasestacionamento: number; 
  condominio_quantidadeunidades: number; 
  condominio_lojas: number; 
  condominio_salas: number;   
  condominio_quadra: string; 
  condominio_lote: string; 
  

  contribuinte_id :  number;
  contribuinte_nome :  string;
  contribuinte_codigo :  string;

  bairro_id :  number;
  bairro_nome :  string;
  bairro_codigo :  string;

  logradouro_id :  number;
  logradouro_nome :  string;
  logradouro_codigo :  string;
}
