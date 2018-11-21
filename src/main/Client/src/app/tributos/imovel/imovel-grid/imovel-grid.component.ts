import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {Imovel} from '../imovel'; 
import {ImovelService} from '../imovel.service';
import {ReportGroup} from "../../../shared/report-group";

@Component({ 
  selector: 'gov-imovel-grid', 
  templateUrl: './imovel-grid.component.html', 
  //styleUrls: ['./imovel-grid.component.css'] 
}) 
export class ImovelGridComponent extends CommonsGrid<Imovel> implements OnInit { 

     constructor(apiService: ImovelService, router: Router) { 
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
         filterData.order = 'trb_imovel.inscricao'
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_imovel'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_imovel' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('tipoinscricao','tipoinscricao','STRING'); 
         retorno[1] = new FieldSearch('datainscricao','datainscricao','DATE'); 
         retorno[2] = new FieldSearch('inscricao','inscricao','STRING'); 
         retorno[3] = new FieldSearch('inscricaoanterior','inscricaoanterior','STRING'); 
         retorno[4] = new FieldSearch('trb_inscricaostatus_id','trb_inscricaostatus_id','ENUM'); 
         retorno[5] = new FieldSearch('datastatus','datastatus','DATE'); 
         retorno[6] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[7] = new FieldSearch('trb_padraoconstrutivo_id','trb_padraoconstrutivo_id','ENUM'); 
         retorno[8] = new FieldSearch('areaconstrucao','areaconstrucao','NUMBER'); 
         retorno[9] = new FieldSearch('dataconstrucao','dataconstrucao','DATE'); 
         retorno[10] = new FieldSearch('fatorconstrucao','fatorconstrucao','NUMBER'); 
         retorno[11] = new FieldSearch('areaterreno','areaterreno','NUMBER'); 
         retorno[12] = new FieldSearch('fatorterreno','fatorterreno','NUMBER'); 
         retorno[13] = new FieldSearch('fracaoideal','fracaoideal','NUMBER'); 
         retorno[14] = new FieldSearch('incra','incra','STRING'); 
         retorno[15] = new FieldSearch('unidade','unidade','STRING'); 
         retorno[16] = new FieldSearch('subunidade','subunidade','STRING'); 
         retorno[17] = new FieldSearch('testadadireita','testadadireita','NUMBER'); 
         retorno[18] = new FieldSearch('testadaesquerda','testadaesquerda','NUMBER'); 
         retorno[19] = new FieldSearch('testadafrente','testadafrente','NUMBER'); 
         retorno[20] = new FieldSearch('testadafundo','testadafundo','NUMBER'); 
         retorno[21] = new FieldSearch('valorvenalconstrucao','valorvenalconstrucao','NUMBER'); 
         retorno[22] = new FieldSearch('valorvenalexcedente','valorvenalexcedente','NUMBER'); 
         retorno[23] = new FieldSearch('valorvenalterreno','valorvenalterreno','NUMBER'); 
         retorno[24] = new FieldSearch('lote','lote','STRING'); 
         retorno[25] = new FieldSearch('loteamentolote','loteamentolote','STRING'); 
         retorno[26] = new FieldSearch('trb_loteamento_id','trb_loteamento_id','ENUM'); 
         retorno[27] = new FieldSearch('quadra','quadra','STRING'); 
         retorno[28] = new FieldSearch('loteamentoquadra','loteamentoquadra','STRING'); 
         retorno[29] = new FieldSearch('trb_distrito_id','trb_distrito_id','ENUM'); 
         retorno[30] = new FieldSearch('trb_setor_id','trb_setor_id','ENUM'); 
         retorno[31] = new FieldSearch('trb_logradourosegmento_id','trb_logradourosegmento_id','ENUM'); 
         retorno[32] = new FieldSearch('trb_logradouro_id','trb_logradouro_id','ENUM'); 
         retorno[33] = new FieldSearch('trb_condominio_id','trb_condominio_id','ENUM'); 
         retorno[34] = new FieldSearch('trb_bairro_id','trb_bairro_id','ENUM'); 
         retorno[35] = new FieldSearch('numero','numero','STRING'); 
         retorno[36] = new FieldSearch('complemento','complemento','STRING'); 
         retorno[37] = new FieldSearch('enderecocorespondencia','enderecocorespondencia','BOOLEAN'); 
         retorno[38] = new FieldSearch('numerometrico','numerometrico','NUMBER'); 
         retorno[39] = new FieldSearch('pavimentos','pavimentos','NUMBER'); 
         retorno[40] = new FieldSearch('trb_tipoimovel_id','trb_tipoimovel_id','ENUM'); 
         retorno[41] = new FieldSearch('trb_tipounidade_id','trb_tipounidade_id','ENUM'); 
         retorno[42] = new FieldSearch('trb_responsavel_id','trb_responsavel_id','ENUM'); 
         retorno[43] = new FieldSearch('trb_motivostatus_id','trb_motivostatus_id','ENUM'); 
         retorno[44] = new FieldSearch('medidoragua','medidoragua','STRING'); 
         retorno[45] = new FieldSearch('medidorluz','medidorluz','STRING'); 
         retorno[46] = new FieldSearch('confrontantes','confrontantes','STRING'); 
         retorno[47] = new FieldSearch('imuneiptu','imuneiptu','BOOLEAN'); 
         retorno[48] = new FieldSearch('imunetaxa','imunetaxa','BOOLEAN'); 
         retorno[49] = new FieldSearch('datarecadastramento','datarecadastramento','DATE'); 
         retorno[50] = new FieldSearch('datarevisao','datarevisao','DATE'); 
         retorno[51] = new FieldSearch('dataatualizacao','dataatualizacao','DATE'); 
         return retorno; 
     }

     getReportList():ReportGroup[]{
       return [];
     }
}
