import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {FaturamentoPadrao} from '../faturamentopadrao'; 
import {FaturamentoPadraoService} from '../faturamentopadrao.service'; 

@Component({
 selector: 'gov-faturamentopadrao-form', 
 templateUrl: './faturamentopadrao-form.component.html', 
 //styleUrls: ['./faturamentopadrao-form.component.css'] 
}) 
export class FaturamentoPadraoFormComponent extends CommonsForm<FaturamentoPadrao> implements OnInit { 

    constructor(apiService: FaturamentoPadraoService, 
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
         //console.log(this.activeBean.faturamentopadrao.id); 
     } 
} 

