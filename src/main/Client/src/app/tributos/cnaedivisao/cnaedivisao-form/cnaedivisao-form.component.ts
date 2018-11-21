import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeDivisao} from '../cnaedivisao'; 
import {CnaeDivisaoService} from '../cnaedivisao.service'; 
import {CnaeSecaoService} from '../../cnaesecao/cnaesecao.service'; 

@Component({
 selector: 'gov-cnaedivisao-form', 
 templateUrl: './cnaedivisao-form.component.html', 
 //styleUrls: ['./cnaedivisao-form.component.css'] 
}) 
export class CnaeDivisaoFormComponent extends CommonsForm<CnaeDivisao> implements OnInit { 

    constructor(apiService: CnaeDivisaoService, 
                            private cnaesecaoService: CnaeSecaoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'cnaesecao': { 
                 return this.cnaesecaoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cnaesecao': { 
                 return this.buildLookupFilter('trb_cnaesecao'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaedivisao.id); 
     } 
} 

