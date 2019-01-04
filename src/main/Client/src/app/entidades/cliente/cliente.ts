import {DomainBase} from '../../utils/utils'; 
import { Endereco } from '../endereco/endereco';
import { ContaBancaria } from '../contabancaria/contabancaria';
import { Contato } from '../contato/contato';
import { Sites } from '../sites/sites';
import { Telefone } from '../telefone/telefone';
import { Email } from '../email/email';
import { Programa } from '../programa/programa';

export interface Cliente extends DomainBase { 

    data_cadastro: Date; 
    nomefantasia: string;
    razaosocial: string; 
    inscricaoestadual: string; 
    inscricaomunicipal: string; 
    cnpj: string; 
    cpf: string;      
    obs: string; 
   
   
    contaBancariaList: ContaBancaria[];
    contatoList: Contato[];
    siteList: Sites[];
    telefoneList: Telefone[];
    emailList: Email[];
    programaLIst: Programa [];
    enderecoList: Endereco[];
}