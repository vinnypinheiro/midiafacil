import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {EmissaoCobrancaItem} from '../emissaocobrancaitem'; 
import {EmissaoCobrancaItemService} from '../emissaocobrancaitem.service'; 
import {EmissaoCobrancaService} from '../../emissaocobranca/emissaocobranca.service'; 
import {DebitoParcelaService} from '../../debitoparcela/debitoparcela.service'; 

@Component({
 selector: 'gov-emissaocobrancaitem-form', 
 templateUrl: './emissaocobrancaitem-form.component.html', 
 //styleUrls: ['./emissaocobrancaitem-form.component.css'] 
}) 
export class EmissaoCobrancaItemFormComponent extends CommonsForm<EmissaoCobrancaItem> implements OnInit { 

    constructor(apiService: EmissaoCobrancaItemService, 
                            private emissaocobrancaService: EmissaoCobrancaService, 
                            private debitoparcelaService: DebitoParcelaService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'emissaocobranca': { 
                 return this.emissaocobrancaService; 
             } 

             case 'debitoparcela': { 
                 return this.debitoparcelaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'emissaocobranca': { 
                 return this.buildLookupFilter('trb_emissaocobranca'); 
             }

             case 'debitoparcela': { 
                 return this.buildLookupFilter('trb_debitoparcela'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.emissaocobrancaitem.id); 
     } 
} 

