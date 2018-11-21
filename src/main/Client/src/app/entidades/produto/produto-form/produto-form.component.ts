import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Produto} from '../produto'; 
import {ProdutoService} from '../produto.service'; 
import {FormatoService} from '../../formato/formato.service'; 
import {TipoProdutoService} from '../../tipoproduto/tipoproduto.service'; 

@Component({
 selector: 'gov-produto-form', 
 templateUrl: './produto-form.component.html', 
 //styleUrls: ['./produto-form.component.css'] 
}) 
export class ProdutoFormComponent extends CommonsForm<Produto> implements OnInit { 

    constructor(apiService: ProdutoService, 
                            private formatoService: FormatoService, 
                            private tipoprodutoService: TipoProdutoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'formato': { 
                 return this.formatoService; 
             } 

             case 'tipoproduto': { 
                 return this.tipoprodutoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'formato': { 
                 return this.buildLookupFilter('formato'); 
             }

             case 'tipoproduto': { 
                 return this.buildLookupFilter('tipoproduto'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.produto.id); 
     } 
} 

