import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Cliente} from '../cliente'; 
import {ClienteService} from '../cliente.service'; 

@Component({ 
  selector: 'gov-cliente-grid', 
  templateUrl: './cliente-grid.component.html', 
  //styleUrls: ['./cliente-grid.component.css'] 
}) 
export class ClienteGridComponent extends CommonsGrid<Cliente> implements OnInit { 

     constructor(apiService: ClienteService, router: Router) { 
         super(apiService, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     onNavigateClick(filterData: FilterData): void { 
         this.loadByFilter(filterData); 
     } 

     getDefaultFilter(): FilterData { 
         const filterData = super.getDefaultFilter(); 
         filterData.order = 'cliente.acessos, cliente.alcance, cliente.apresentador, cliente.bairro, cliente.banco, cliente.bancoagencia, cliente.bancoconta, cliente.cidade, cliente.cnpj, cliente.contato, cliente.cpf, cliente.data_cadastro, cliente.email, cliente.email1, cliente.email2, cliente.emailcontato, cliente.endereco, cliente.faixahoraria, cliente.fax, cliente.inscricaoestadual, cliente.inscricaomunicipal, cliente.nomefantasia, cliente.obs, cliente.razaosocial, cliente.site, cliente.telefone, cliente.telefone2, cliente.uf_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cliente'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'cliente' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('acessos','acessos','STRING'); 
         retorno[1] = new FieldSearch('alcance','alcance','STRING'); 
         retorno[2] = new FieldSearch('apresentador','apresentador','STRING'); 
         retorno[3] = new FieldSearch('bairro','bairro','STRING'); 
         retorno[4] = new FieldSearch('banco','banco','STRING'); 
         retorno[5] = new FieldSearch('bancoagencia','bancoagencia','STRING'); 
         retorno[6] = new FieldSearch('bancoconta','bancoconta','STRING'); 
         retorno[7] = new FieldSearch('cidade','cidade','STRING'); 
         retorno[8] = new FieldSearch('cnpj','cnpj','STRING'); 
         retorno[9] = new FieldSearch('contato','contato','STRING'); 
         retorno[10] = new FieldSearch('cpf','cpf','STRING'); 
         retorno[11] = new FieldSearch('data_cadastro','data_cadastro','DATE'); 
         retorno[12] = new FieldSearch('email','email','STRING'); 
         retorno[13] = new FieldSearch('email1','email1','STRING'); 
         retorno[14] = new FieldSearch('email2','email2','STRING'); 
         retorno[15] = new FieldSearch('emailcontato','emailcontato','STRING'); 
         retorno[16] = new FieldSearch('endereco','endereco','STRING'); 
         retorno[17] = new FieldSearch('faixahoraria','faixahoraria','STRING'); 
         retorno[18] = new FieldSearch('fax','fax','STRING'); 
         retorno[19] = new FieldSearch('inscricaoestadual','inscricaoestadual','STRING'); 
         retorno[20] = new FieldSearch('inscricaomunicipal','inscricaomunicipal','STRING'); 
         retorno[21] = new FieldSearch('nomefantasia','nomefantasia','STRING'); 
         retorno[22] = new FieldSearch('obs','obs','STRING'); 
         retorno[23] = new FieldSearch('razaosocial','razaosocial','STRING'); 
         retorno[24] = new FieldSearch('site','site','STRING'); 
         retorno[25] = new FieldSearch('telefone','telefone','STRING'); 
         retorno[26] = new FieldSearch('telefone2','telefone2','STRING'); 
         retorno[27] = new FieldSearch('uf_id','uf_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}