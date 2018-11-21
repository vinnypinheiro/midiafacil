import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Cartorio} from '../cartorio'; 
import {CartorioService} from '../cartorio.service'; 

@Component({ 
  selector: 'gov-cartorio-grid', 
  templateUrl: './cartorio-grid.component.html', 
  //styleUrls: ['./cartorio-grid.component.css'] 
}) 
export class CartorioGridComponent extends CommonsGrid<Cartorio> implements OnInit { 

     constructor(apiService: CartorioService, router: Router) { 
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
         filterData.order = 'trb_cartorio.trb_tipocartorio_id, trb_cartorio.codigo, trb_cartorio.nome, trb_cartorio.tabeliao, trb_cartorio.trb_tipologradouro_id, trb_cartorio.logradouro, trb_cartorio.numero, trb_cartorio.complemento, trb_cartorio.bairro ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_cartorio'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_cartorio' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_tipocartorio_id','trb_tipocartorio_id','ENUM'); 
         retorno[1] = new FieldSearch('codigo','codigo','STRING'); 
         retorno[2] = new FieldSearch('nome','nome','STRING'); 
         retorno[3] = new FieldSearch('tabeliao','tabeliao','STRING'); 
         retorno[4] = new FieldSearch('trb_tipologradouro_id','trb_tipologradouro_id','NUMBER'); 
         retorno[5] = new FieldSearch('logradouro','logradouro','STRING'); 
         retorno[6] = new FieldSearch('numero','numero','STRING'); 
         retorno[7] = new FieldSearch('complemento','complemento','STRING'); 
         retorno[8] = new FieldSearch('bairro','bairro','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}