import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {ModuloServicoTomado} from '../moduloservicotomado'; 
import {ModuloServicoTomadoService} from '../moduloservicotomado.service'; 

@Component({ 
  selector: 'gov-moduloservicotomado-grid', 
  templateUrl: './moduloservicotomado-grid.component.html', 
  //styleUrls: ['./moduloservicotomado-grid.component.css'] 
}) 
export class ModuloServicoTomadoGridComponent extends CommonsGrid<ModuloServicoTomado> implements OnInit { 

     constructor(apiService: ModuloServicoTomadoService, router: Router) { 
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
         filterData.order = 'trb_moduloservicotomado.trb_contribuinte_id, trb_moduloservicotomado.trb_responsavel_id, trb_moduloservicotomado.trb_tipodeclarante_id, trb_moduloservicotomado.datadeclaracao, trb_moduloservicotomado.trb_tipodeclaracao_id, trb_moduloservicotomado.trb_statusdeclaracaoeletronica_id, trb_moduloservicotomado.protocolo, trb_moduloservicotomado.protocoloanterior, trb_moduloservicotomado.versao ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_moduloservicotomado'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_moduloservicotomado' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_responsavel_id','trb_responsavel_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_tipodeclarante_id','trb_tipodeclarante_id','ENUM'); 
         retorno[3] = new FieldSearch('datadeclaracao','datadeclaracao','DATE'); 
         retorno[4] = new FieldSearch('trb_tipodeclaracao_id','trb_tipodeclaracao_id','ENUM'); 
         retorno[5] = new FieldSearch('trb_statusdeclaracaoeletronica_id','trb_statusdeclaracaoeletronica_id','ENUM'); 
         retorno[6] = new FieldSearch('protocolo','protocolo','STRING'); 
         retorno[7] = new FieldSearch('protocoloanterior','protocoloanterior','STRING'); 
         retorno[8] = new FieldSearch('versao','versao','STRING'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}