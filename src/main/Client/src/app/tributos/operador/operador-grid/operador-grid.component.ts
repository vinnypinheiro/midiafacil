import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Operador} from '../operador'; 
import {OperadorService} from '../operador.service'; 

@Component({ 
  selector: 'gov-operador-grid', 
  templateUrl: './operador-grid.component.html', 
  //styleUrls: ['./operador-grid.component.css'] 
}) 
export class OperadorGridComponent extends CommonsGrid<Operador> implements OnInit { 

     constructor(apiService: OperadorService, router: Router) { 
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
         filterData.order = 'trb_operador_nome, trb_operador.cnpjcpf';
         filterData.codigoField = 'cnpjcpf';
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_operador'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_operador' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_tipooperador_id','trb_tipooperador_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_departamento_id','trb_departamento_id','ENUM'); 
         retorno[2] = new FieldSearch('senha','senha','STRING'); 
         retorno[3] = new FieldSearch('datacadastro','datacadastro','DATE'); 
         retorno[4] = new FieldSearch('datavalidade','datavalidade','DATE'); 
         retorno[5] = new FieldSearch('ativo','ativo','BOOLEAN'); 
         retorno[6] = new FieldSearch('nome','nome','STRING'); 
         retorno[7] = new FieldSearch('rg','rg','STRING'); 
         retorno[8] = new FieldSearch('cnpjcpf','cnpjcpf','STRING'); 
         retorno[9] = new FieldSearch('nit','nit','STRING'); 
         retorno[10] = new FieldSearch('trb_naturezajuridica_id','trb_naturezajuridica_id','ENUM'); 
         retorno[11] = new FieldSearch('email','email','STRING'); 
         retorno[12] = new FieldSearch('trb_nacionalidade_id','trb_nacionalidade_id','ENUM'); 
         retorno[13] = new FieldSearch('datalancamento','datalancamento','DATE'); 
         retorno[14] = new FieldSearch('telefonefixo','telefonefixo','STRING'); 
         retorno[15] = new FieldSearch('telefonemovel','telefonemovel','STRING'); 
         retorno[16] = new FieldSearch('trb_tipologradouro_id','trb_tipologradouro_id','NUMBER'); 
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
