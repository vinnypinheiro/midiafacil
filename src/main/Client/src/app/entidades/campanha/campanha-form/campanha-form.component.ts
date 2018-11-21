import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Campanha} from '../campanha'; 
import {CampanhaService} from '../campanha.service'; 
import {ClienteService} from '../../cliente/cliente.service'; 

@Component({
 selector: 'gov-campanha-form', 
 templateUrl: './campanha-form.component.html', 
 //styleUrls: ['./campanha-form.component.css'] 
}) 
export class CampanhaFormComponent extends CommonsForm<Campanha> implements OnInit { 

    constructor(apiService: CampanhaService, 
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
         //console.log(this.activeBean.campanha.id); 
     } 
} 

