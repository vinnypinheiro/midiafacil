import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Uf} from '../uf'; 
import {UfService} from '../uf.service'; 
import {PaisService} from '../../pais/pais.service'; 

@Component({
 selector: 'gov-uf-form', 
 templateUrl: './uf-form.component.html', 
 //styleUrls: ['./uf-form.component.css'] 
}) 
export class UfFormComponent extends CommonsForm<Uf> implements OnInit { 

    constructor(apiService: UfService, 
                            private paisService: PaisService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'pais': { 
                 return this.paisService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'pais': { 
                 return this.buildLookupFilter('pais'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.uf.id); 
     } 
} 

