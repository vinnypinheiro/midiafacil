import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PedidoInsercao} from '../pedidoinsercao'; 
import {PedidoInsercaoService} from '../pedidoinsercao.service'; 
import {AgenciaService} from '../../agencia/agencia.service'; 
import {ClienteService} from '../../cliente/cliente.service'; 

@Component({
 selector: 'gov-pedidoinsercao-form', 
 templateUrl: './pedidoinsercao-form.component.html', 
 //styleUrls: ['./pedidoinsercao-form.component.css'] 
}) 
export class PedidoInsercaoFormComponent extends CommonsForm<PedidoInsercao> implements OnInit { 

    constructor(apiService: PedidoInsercaoService, 
                            private agenciaService: AgenciaService, 
                            private clienteService: ClienteService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'agencia': { 
                 return this.agenciaService; 
             } 

             case 'cliente': { 
                 return this.clienteService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'agencia': { 
                 return this.buildLookupFilter('agencia'); 
             }

             case 'cliente': { 
                 return this.buildLookupFilter('cliente'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.pedidoinsercao.id); 
     } 
} 

