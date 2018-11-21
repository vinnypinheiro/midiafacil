import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {BancoContrato} from '../bancocontrato'; 
import {BancoContratoService} from '../bancocontrato.service'; 

@Component({ 
  selector: 'gov-bancocontrato-grid', 
  templateUrl: './bancocontrato-grid.component.html', 
  //styleUrls: ['./bancocontrato-grid.component.css'] 
}) 
export class BancoContratoGridComponent extends CommonsGrid<BancoContrato> implements OnInit { 

     constructor(apiService: BancoContratoService, router: Router) { 
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
         filterData.codigoField = 'numero';
         filterData.nomeField = "numero";
         filterData.order = 'trb_bancocontrato.trb_tipobancocontrato_id, trb_bancocontrato.trb_contabancaria_id, trb_bancocontrato.carteira, trb_bancocontrato.numero ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_bancocontrato'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_bancocontrato' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_tipobancocontrato_id','trb_tipobancocontrato_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_contabancaria_id','trb_contabancaria_id','ENUM'); 
         retorno[2] = new FieldSearch('carteira','carteira','STRING'); 
         retorno[3] = new FieldSearch('numero','numero','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}
