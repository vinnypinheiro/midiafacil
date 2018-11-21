import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {VencimentoPadrao} from '../vencimentopadrao'; 
import {VencimentoPadraoService} from '../vencimentopadrao.service'; 

@Component({
 selector: 'gov-vencimentopadrao-form', 
 templateUrl: './vencimentopadrao-form.component.html', 
 //styleUrls: ['./vencimentopadrao-form.component.css'] 
}) 
export class VencimentoPadraoFormComponent extends CommonsForm<VencimentoPadrao> implements OnInit { 

    constructor(apiService: VencimentoPadraoService, 
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
         //console.log(this.activeBean.vencimentopadrao.id); 
     } 
} 

