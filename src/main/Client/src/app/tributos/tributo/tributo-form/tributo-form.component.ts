import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Tributo} from '../tributo'; 
import {TributoService} from '../tributo.service'; 
import {ReceitaService} from '../../receita/receita.service'; 
import {BancoContratoService} from '../../bancocontrato/bancocontrato.service'; 

@Component({
 selector: 'gov-tributo-form', 
 templateUrl: './tributo-form.component.html', 
 //styleUrls: ['./tributo-form.component.css'] 
}) 
export class TributoFormComponent extends CommonsForm<Tributo> implements OnInit { 

    constructor(apiService: TributoService, 
                            private receitaService: ReceitaService, 
                            private bancocontratoService: BancoContratoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'receita': { 
                 return this.receitaService; 
             } 

             case 'bancocontrato': { 
                 return this.bancocontratoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'receita': { 
                 return this.buildLookupFilter('trb_receita'); 
             }

             case 'bancocontrato': { 
                 return this.buildLookupFilter('trb_bancocontrato'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.tributo.id); 
     } 
} 

