import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router'; 
import {FilterData} from '../../../components/interfaces'; 
import {FieldSearch} from '../../../utils/utils'; 
 import {CommonsGrid} from '../../../commons-grid'; 
import {ReportGroup} from '../../../shared/report-group'; 
import {Veiculo} from '../veiculo'; 
import {VeiculoService} from '../veiculo.service';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { fuseAnimations } from '@fuse/animations';

@Component({ 
  selector: 'gov-veiculo-grid', 
  templateUrl: './veiculo-grid.component.html',
    styleUrls    : ['./veiculo-grid-component.scss'],
    animations   : fuseAnimations,
}) 
export class VeiculoGridComponent extends CommonsGrid<Veiculo> implements OnInit {

    public dataList: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource = new MatTableDataSource;
    displayedColumns: string[] = ['ID','nomefantasia', 'email', 'telefone', 'programa'];

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('filter')
    filter: ElementRef;

     constructor(apiService: VeiculoService, router: Router) { 
         super(apiService, router); 
     } 

     ngOnInit() {
         this.dataSource.paginator = this.paginator;
         this.loadByFilter(this.getDefaultFilter());
     }

    loadByFilter(filterData: FilterData) {
        this.apiService.loadByFilter(filterData).subscribe(response => {
            this.dataSource.data = response.content;
            this.activeBean = null;
        });
    }

     onNavigateClick(filterData: FilterData): void { 
         this.loadByFilter(filterData); 
     } 

     getDefaultFilter(): FilterData { 
         const filterData = super.getDefaultFilter(); 
         filterData.order = 'veiculo.acessos, veiculo.alcance, veiculo.apresentador, veiculo.bairro, veiculo.banco, veiculo.bancoagencia, veiculo.bancoconta, veiculo.cidade, veiculo.cnpj, veiculo.contato, veiculo.cpf, veiculo.data_cadastro, veiculo.email, veiculo.email1, veiculo.email2, veiculo.emailcontato, veiculo.endereco, veiculo.faixahoraria, veiculo.fax, veiculo.inscricaoestadual, veiculo.inscricaomunicipal, veiculo.nomefantasia, veiculo.obs, veiculo.razaosocial, veiculo.site, veiculo.telefone, veiculo.telefone2, veiculo.uf_id ' 
         return filterData; 
     } 

     getRowFilter(): FilterData { 
         let filter= this.buildRowFilter('trb_veiculo'); 
         filter.whereClauses[0].dataType='INTEGER'; 
         return filter; 
     } 

     getTableName(): string { 
         return 'veiculo' ; 
     } 

     getFieldList(): FieldSearch[] { 
         let retorno = []; 
         retorno[0] = new FieldSearch('acessos','acessos','STRING'); 
         retorno[1] = new FieldSearch('alcance','alcance','STRING'); 
         retorno[2] = new FieldSearch('apresentador','apresentador','STRING'); 
         retorno[3] = new FieldSearch('bairro','bairro','STRING'); 
         retorno[4] = new FieldSearch('banco','banco','STRING'); 
         retorno[5] = new FieldSearch('bancoagencia','bancoagencia','STRING'); 
         retorno[6] = new FieldSearch('bancoconta','bancoconta','STRING'); 
         retorno[7] = new FieldSearch('cidade','cidade','STRING'); 
         retorno[8] = new FieldSearch('cnpj','cnpj','STRING'); 
         retorno[9] = new FieldSearch('contato','contato','STRING'); 
         retorno[10] = new FieldSearch('cpf','cpf','STRING'); 
         retorno[11] = new FieldSearch('data_cadastro','data_cadastro','DATE'); 
         retorno[12] = new FieldSearch('email','email','STRING'); 
         retorno[13] = new FieldSearch('email1','email1','STRING'); 
         retorno[14] = new FieldSearch('email2','email2','STRING'); 
         retorno[15] = new FieldSearch('emailcontato','emailcontato','STRING'); 
         retorno[16] = new FieldSearch('endereco','endereco','STRING'); 
         retorno[17] = new FieldSearch('faixahoraria','faixahoraria','STRING'); 
         retorno[18] = new FieldSearch('fax','fax','STRING'); 
         retorno[19] = new FieldSearch('inscricaoestadual','inscricaoestadual','STRING'); 
         retorno[20] = new FieldSearch('inscricaomunicipal','inscricaomunicipal','STRING'); 
         retorno[21] = new FieldSearch('nomefantasia','nomefantasia','STRING'); 
         retorno[22] = new FieldSearch('obs','obs','STRING'); 
         retorno[23] = new FieldSearch('razaosocial','razaosocial','STRING'); 
         retorno[24] = new FieldSearch('site','site','STRING'); 
         retorno[25] = new FieldSearch('telefone','telefone','STRING'); 
         retorno[26] = new FieldSearch('telefone2','telefone2','STRING'); 
         retorno[27] = new FieldSearch('uf_id','uf_id','ENUM'); 
         return retorno; 
     } 
getReportList():ReportGroup[]{ 
    return []; 
} 
}