import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {OperadorEmpresa} from '../operadorempresa'; 
import {OperadorEmpresaService} from '../operadorempresa.service'; 

@Component({ 
  selector: 'gov-operadorempresa-grid', 
  templateUrl: './operadorempresa-grid.component.html', 
  //styleUrls: ['./operadorempresa-grid.component.css'] 
}) 
export class OperadorEmpresaGridComponent extends CommonsGrid<OperadorEmpresa> implements OnInit { 

     constructor(apiService: OperadorEmpresaService, router: Router) { 
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
         filterData.order = 'trb_operadorempresa.trb_tipooperador_id, trb_operadorempresa.trb_empresa_id, trb_operadorempresa.senha, trb_operadorempresa.datacadastro, trb_operadorempresa.datavalidade, trb_operadorempresa.ativo, trb_operadorempresa.trb_nacionalidade_id, trb_operadorempresa.trb_naturezajuridica_id, trb_operadorempresa.nome, trb_operadorempresa.rg, trb_operadorempresa.cnpjcpf, trb_operadorempresa.nit, trb_operadorempresa.email, trb_operadorempresa.datalancamento, trb_operadorempresa.telefonefixo, trb_operadorempresa.telefonemovel, trb_operadorempresa.trb_tipologradouro_id, trb_operadorempresa.logradouro, trb_operadorempresa.numero, trb_operadorempresa.complemento, trb_operadorempresa.bairro, trb_operadorempresa.trb_cidade_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_operadorempresa'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_operadorempresa' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_tipooperador_id','trb_tipooperador_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_empresa_id','trb_empresa_id','ENUM'); 
         retorno[2] = new FieldSearch('senha','senha','STRING'); 
         retorno[3] = new FieldSearch('datacadastro','datacadastro','DATE'); 
         retorno[4] = new FieldSearch('datavalidade','datavalidade','DATE'); 
         retorno[5] = new FieldSearch('ativo','ativo','BOOLEAN'); 
         retorno[6] = new FieldSearch('trb_nacionalidade_id','trb_nacionalidade_id','ENUM'); 
         retorno[7] = new FieldSearch('trb_naturezajuridica_id','trb_naturezajuridica_id','ENUM'); 
         retorno[8] = new FieldSearch('nome','nome','STRING'); 
         retorno[9] = new FieldSearch('rg','rg','STRING'); 
         retorno[10] = new FieldSearch('cnpjcpf','cnpjcpf','STRING'); 
         retorno[11] = new FieldSearch('nit','nit','STRING'); 
         retorno[12] = new FieldSearch('email','email','STRING'); 
         retorno[13] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[14] = new FieldSearch('telefonefixo','telefonefixo','STRING'); 
         retorno[15] = new FieldSearch('telefonemovel','telefonemovel','STRING'); 
         retorno[16] = new FieldSearch('trb_tipologradouro_id','trb_tipologradouro_id','ENUM'); 
         retorno[17] = new FieldSearch('logradouro','logradouro','STRING'); 
         retorno[18] = new FieldSearch('numero','numero','STRING'); 
         retorno[19] = new FieldSearch('complemento','complemento','STRING'); 
         retorno[20] = new FieldSearch('bairro','bairro','STRING'); 
         retorno[21] = new FieldSearch('trb_cidade_id','trb_cidade_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}