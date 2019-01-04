import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PedidoInsercaoItem} from '../pedidoinsercaoitem'; 
import {PedidoInsercaoItemService} from '../pedidoinsercaoitem.service'; 
import {PedidoInsercaoService} from '../../pedidoinsercao/pedidoinsercao.service'; 
import {ProdutoService} from '../../produto/produto.service'; 

@Component({
 selector: 'gov-pedidoinsercaoitem-form', 
 templateUrl: './pedidoinsercaoitem-form.component.html', 
 //styleUrls: ['./pedidoinsercaoitem-form.component.css'] 
}) 
export class PedidoInsercaoItemFormComponent extends CommonsForm<PedidoInsercaoItem> implements OnInit { 

    constructor(apiService: PedidoInsercaoItemService, 
                            private pedidoinsercaoService: PedidoInsercaoService, 
                            private produtoService: ProdutoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'pedidoinsercao': { 
                 return this.pedidoinsercaoService; 
             } 

             case 'produto': { 
                 return this.produtoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'pedidoinsercao': { 
                 return this.buildLookupFilter('pedidoinsercao'); 
             }

             case 'produto': { 
                 return this.buildLookupFilter('produto'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.pedidoinsercaoitem.id); 
     } 
} 

