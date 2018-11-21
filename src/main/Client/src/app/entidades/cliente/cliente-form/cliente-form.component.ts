import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Cliente} from '../cliente'; 
import {ClienteService} from '../cliente.service'; 
import {UfService} from '../../uf/uf.service'; 

@Component({
 selector: 'gov-cliente-form', 
 templateUrl: './cliente-form.component.html', 
 //styleUrls: ['./cliente-form.component.css'] 
}) 
export class ClienteFormComponent extends CommonsForm<Cliente> implements OnInit { 

    constructor(apiService: ClienteService, 
                            private ufService: UfService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'uf': { 
                 return this.ufService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'uf': { 
                 return this.buildLookupFilter('uf'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cliente.id); 
     } 
} 

