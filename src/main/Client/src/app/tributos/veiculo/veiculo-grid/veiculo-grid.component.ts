import {Component, OnInit} from '@angular/core'; 
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Veiculo} from '../veiculo'; 
import {VeiculoService} from '../veiculo.service'; 

@Component({ 
  selector: 'gov-veiculo-grid', 
  templateUrl: './veiculo-grid.component.html', 
  //styleUrls: ['./veiculo-grid.component.css'] 
}) 
export class VeiculoGridComponent extends CommonsGrid<Veiculo> implements OnInit { 

     constructor(apiService: VeiculoService, router: Router) { 
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
         filterData.order = 'trb_veiculo.trb_contribuinte_id, trb_veiculo.trb_tipoveiculo_id, trb_veiculo.trb_categoriaveiculo_id, trb_veiculo.fabricante, trb_veiculo.marca, trb_veiculo.modelo, trb_veiculo.cor, trb_veiculo.combustivel, trb_veiculo.chassi, trb_veiculo.placa, trb_veiculo.renavam, trb_veiculo.cilindrada, trb_veiculo.especie, trb_veiculo.capacidade, trb_veiculo.potencia, trb_veiculo.municipio, trb_veiculo.restricoes, trb_veiculo.dataaquisicao, trb_veiculo.anofabricacao, trb_veiculo.anoipva, trb_veiculo.anolicenciamento ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_veiculo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'trb_veiculo' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('trb_contribuinte_id','trb_contribuinte_id','ENUM'); 
         retorno[1] = new FieldSearch('trb_tipoveiculo_id','trb_tipoveiculo_id','ENUM'); 
         retorno[2] = new FieldSearch('trb_categoriaveiculo_id','trb_categoriaveiculo_id','ENUM'); 
         retorno[3] = new FieldSearch('fabricante','fabricante','STRING'); 
         retorno[4] = new FieldSearch('marca','marca','STRING'); 
         retorno[5] = new FieldSearch('modelo','modelo','STRING'); 
         retorno[6] = new FieldSearch('cor','cor','STRING'); 
         retorno[7] = new FieldSearch('combustivel','combustivel','STRING'); 
         retorno[8] = new FieldSearch('chassi','chassi','STRING'); 
         retorno[9] = new FieldSearch('placa','placa','STRING'); 
         retorno[10] = new FieldSearch('renavam','renavam','STRING'); 
         retorno[11] = new FieldSearch('cilindrada','cilindrada','NUMBER'); 
         retorno[12] = new FieldSearch('especie','especie','STRING'); 
         retorno[13] = new FieldSearch('capacidade','capacidade','NUMBER'); 
         retorno[14] = new FieldSearch('potencia','potencia','NUMBER'); 
         retorno[15] = new FieldSearch('municipio','municipio','STRING'); 
         retorno[16] = new FieldSearch('restricoes','restricoes','STRING'); 
         retorno[17] = new FieldSearch('dataaquisicao','dataaquisicao','DATE'); 
         retorno[18] = new FieldSearch('anofabricacao','anofabricacao','NUMBER'); 
         retorno[19] = new FieldSearch('anoipva','anoipva','NUMBER'); 
         retorno[20] = new FieldSearch('anolicenciamento','anolicenciamento','NUMBER'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}