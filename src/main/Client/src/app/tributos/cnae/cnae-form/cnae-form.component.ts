import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Cnae} from '../cnae'; 
import {CnaeService} from '../cnae.service'; 
import {CnaeClasseService} from '../../cnaeclasse/cnaeclasse.service'; 

@Component({
 selector: 'gov-cnae-form', 
 templateUrl: './cnae-form.component.html', 
 //styleUrls: ['./cnae-form.component.css'] 
}) 
export class CnaeFormComponent extends CommonsForm<Cnae> implements OnInit { 

    constructor(apiService: CnaeService, 
                            private cnaeclasseService: CnaeClasseService, 
                route: ActivatedRoute, 
                router: Router ) {
         super(apiService, route, router); 
    }

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'cnaeclasse': { 
                 return this.cnaeclasseService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cnaeclasse': { 
                 return this.buildLookupFilter('trb_cnaeclasse'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnae.id); 
     } 
} 

