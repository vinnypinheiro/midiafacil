import {DomainBase} from '../../utils/utils'; 
import { Programa } from '../programa/programa';


import { Endereco } from '../endereco/endereco';
import { Sites } from '../sites/sites';
import { Telefone } from '../telefone/telefone';
import { Email } from '../email/email';
import { Contato } from '../contato/contato';
import { ContaBancaria } from '../contabancaria/contabancaria';


export interface Veiculo extends DomainBase { 

     data_cadastro: Date; 
     nomefantasia: string;
     razaosocial: string; 
     inscricaoestadual: string; 
     inscricaomunicipal: string; 
     cnpj: string; 
     cpf: string;      
     obs: string;
     email: string;
     telefone: string;
    
    
     contaBancariaList: ContaBancaria[];
     contatoList: Contato[];
     siteList: Sites[];
     telefoneList: Telefone[];
     emailList: Email[];
    programalist: Programa [];
    enderecoList: Endereco[];

}