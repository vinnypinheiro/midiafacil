import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeSecao} from '../cnaesecao'; 
import {CnaeSecaoService} from '../cnaesecao.service'; 

@Component({
 selector: 'gov-cnaesecao-form', 
 templateUrl: './cnaesecao-form.component.html', 
 //styleUrls: ['./cnaesecao-form.component.css'] 
}) 
export class CnaeSecaoFormComponent extends CommonsForm<CnaeSecao> implements OnInit { 

    constructor(apiService: CnaeSecaoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaesecao.id); 
     } 
} 

