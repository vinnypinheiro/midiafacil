import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Departamento} from '../departamento'; 
import {DepartamentoService} from '../departamento.service'; 
import {UnidadeGestoraService} from '../../unidadegestora/unidadegestora.service'; 

@Component({
 selector: 'gov-departamento-form', 
 templateUrl: './departamento-form.component.html', 
 //styleUrls: ['./departamento-form.component.css'] 
}) 
export class DepartamentoFormComponent extends CommonsForm<Departamento> implements OnInit { 

    constructor(apiService: DepartamentoService, 
                            private unidadegestoraService: UnidadeGestoraService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'unidadegestora': { 
                 return this.unidadegestoraService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'unidadegestora': { 
                 return this.buildLookupFilter('trb_unidadegestora'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.departamento.id); 
     } 
} 

