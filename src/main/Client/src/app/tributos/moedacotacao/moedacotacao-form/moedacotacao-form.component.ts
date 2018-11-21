import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {MoedaCotacao} from '../moedacotacao'; 
import {MoedaCotacaoService} from '../moedacotacao.service'; 
import {MoedaService} from '../../moeda/moeda.service'; 

@Component({
 selector: 'gov-moedacotacao-form', 
 templateUrl: './moedacotacao-form.component.html', 
 //styleUrls: ['./moedacotacao-form.component.css'] 
}) 
export class MoedaCotacaoFormComponent extends CommonsForm<MoedaCotacao> implements OnInit { 

    constructor(apiService: MoedaCotacaoService, 
                            private moedaService: MoedaService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'moeda': { 
                 return this.moedaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'moeda': { 
                 return this.buildLookupFilter('trb_moeda'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.moedacotacao.id); 
     } 
} 

