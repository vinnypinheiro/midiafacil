import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ContaBancaria} from '../contabancaria'; 
import {ContaBancariaService} from '../contabancaria.service'; 

@Component({ 
  selector: 'gov-contabancaria-grid', 
  templateUrl: './contabancaria-grid.component.html', 
  //styleUrls: ['./contabancaria-grid.component.css'] 
}) 
export class ContaBancariaGridComponent extends CommonsGrid<ContaBancaria> implements OnInit { 

     constructor(apiService: ContaBancariaService, router: Router) { 
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
         filterData.codigoField = 'agencia';
         filterData.nomeField = 'conta';
         filterData.order = 'trb_contabancaria.trb_unidadegestora_id, trb_contabancaria.trb_tipoconta_id, trb_contabancaria.trb_banco_id, trb_contabancaria.agencia, trb_contabancaria.conta, trb_contabancaria.descricao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_contabancaria'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_contabancaria' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_unidadegestora_id','trb_unidadegestora_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_tipoconta_id','trb_tipoconta_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_banco_id','trb_banco_id','ENUM'); 
         retorno[3] = new FieldSearch('agencia','agencia','STRING'); 
         retorno[4] = new FieldSearch('conta','conta','STRING'); 
         retorno[5] = new FieldSearch('descricao','descricao','STRING'); 
         return retorno; 
     }

    getReportList():ReportGroup[]{
        return [];
    }
}
