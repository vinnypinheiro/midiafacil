import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {CertidaoEmitida} from '../certidaoemitida'; 
import {CertidaoEmitidaService} from '../certidaoemitida.service'; 

@Component({ 
  selector: 'gov-certidaoemitida-grid', 
  templateUrl: './certidaoemitida-grid.component.html', 
  //styleUrls: ['./certidaoemitida-grid.component.css'] 
}) 
export class CertidaoEmitidaGridComponent extends CommonsGrid<CertidaoEmitida> implements OnInit { 

     constructor(apiService: CertidaoEmitidaService, router: Router) { 
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
         filterData.order = 'trb_certidaoemitida.numero';
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_certidaoemitida'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_certidaoemitida' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('tipocontribuinte','tipocontribuinte','STRING'); 
         retorno[1] = new FieldSearch('trb_referencia_id','trb_referencia_id','NUMBER'); 
         retorno[2] = new FieldSearch('trb_tipocertidao_id','trb_tipocertidao_id','ENUM'); 
         retorno[3] = new FieldSearch('datainicio','datainicio','DATE'); 
         retorno[4] = new FieldSearch('datafim','datafim','DATE'); 
         retorno[5] = new FieldSearch('numero','numero','STRING'); 
         retorno[6] = new FieldSearch('hashcontrol','hashcontrol','STRING'); 
         return retorno; 
     } 

    getReportList():ReportGroup[]{
      return [];
    }
}
