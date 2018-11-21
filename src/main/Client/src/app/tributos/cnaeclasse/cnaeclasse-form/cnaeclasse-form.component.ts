import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeClasse} from '../cnaeclasse'; 
import {CnaeClasseService} from '../cnaeclasse.service'; 
import {CnaeGrupoService} from '../../cnaegrupo/cnaegrupo.service'; 

@Component({
 selector: 'gov-cnaeclasse-form', 
 templateUrl: './cnaeclasse-form.component.html', 
 //styleUrls: ['./cnaeclasse-form.component.css'] 
}) 
export class CnaeClasseFormComponent extends CommonsForm<CnaeClasse> implements OnInit { 

    constructor(apiService: CnaeClasseService, 
                            private cnaegrupoService: CnaeGrupoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'cnaegrupo': { 
                 return this.cnaegrupoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cnaegrupo': { 
                 return this.buildLookupFilter('trb_cnaegrupo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaeclasse.id); 
     } 
} 

