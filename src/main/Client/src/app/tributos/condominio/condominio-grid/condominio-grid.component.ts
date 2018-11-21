import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Condominio} from '../condominio'; 
import {CondominioService} from '../condominio.service'; 

@Component({ 
  selector: 'gov-condominio-grid', 
  templateUrl: './condominio-grid.component.html', 
  //styleUrls: ['./condominio-grid.component.css'] 
}) 
export class CondominioGridComponent extends CommonsGrid<Condominio> implements OnInit { 

     constructor(apiService: CondominioService, router: Router) { 
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
         filterData.order = 'trb_condominio.codigo, trb_condominio.nome'
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_condominio'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_condominio' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[1] = new FieldSearch('nome','nome','STRING'); 
         retorno[2] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[3] = new FieldSearch('datacadastro','datacadastro','DATE'); 
         retorno[4] = new FieldSearch('arealote','arealote','NUMBER'); 
         retorno[5] = new FieldSearch('areaedificacao','areaedificacao','NUMBER'); 
         retorno[6] = new FieldSearch('areacomum','areacomum','NUMBER'); 
         retorno[7] = new FieldSearch('areaprivativa','areaprivativa','NUMBER'); 
         retorno[8] = new FieldSearch('areacoberta','areacoberta','NUMBER'); 
         retorno[9] = new FieldSearch('areacobertacomum','areacobertacomum','NUMBER'); 
         retorno[10] = new FieldSearch('areacobertaprivativa','areacobertaprivativa','NUMBER'); 
         retorno[11] = new FieldSearch('areadescoberta','areadescoberta','NUMBER'); 
         retorno[12] = new FieldSearch('areadescobertacomum','areadescobertacomum','NUMBER'); 
         retorno[13] = new FieldSearch('areadescobertaprivativa','areadescobertaprivativa','NUMBER'); 
         retorno[14] = new FieldSearch('areamezanino','areamezanino','NUMBER'); 
         retorno[15] = new FieldSearch('areamezaninocomum','areamezaninocomum','NUMBER'); 
         retorno[16] = new FieldSearch('areamezaninoprivativo','areamezaninoprivativo','NUMBER'); 
         retorno[17] = new FieldSearch('vagasgaragem','vagasgaragem','NUMBER'); 
         retorno[18] = new FieldSearch('vagasestacionamento','vagasestacionamento','NUMBER'); 
         retorno[19] = new FieldSearch('quantidadeunidades','quantidadeunidades','NUMBER'); 
         retorno[20] = new FieldSearch('lojas','lojas','NUMBER'); 
         retorno[21] = new FieldSearch('salas','salas','NUMBER'); 
         retorno[22] = new FieldSearch('trb_bairro_id','trb_bairro_id','ENUM'); 
         retorno[23] = new FieldSearch('quadra','quadra','STRING'); 
         retorno[24] = new FieldSearch('lote','lote','STRING'); 
         return retorno; 
     }

    getReportList():ReportGroup[]{
        return [];
    }
}
