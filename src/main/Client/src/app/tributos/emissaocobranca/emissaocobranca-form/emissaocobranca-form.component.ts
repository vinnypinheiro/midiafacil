import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {EmissaoCobranca} from '../emissaocobranca'; 
import {EmissaoCobrancaService} from '../emissaocobranca.service'; 
import {BancoContratoService} from '../../bancocontrato/bancocontrato.service'; 

@Component({
 selector: 'gov-emissaocobranca-form', 
 templateUrl: './emissaocobranca-form.component.html', 
 //styleUrls: ['./emissaocobranca-form.component.css'] 
}) 
export class EmissaoCobrancaFormComponent extends CommonsForm<EmissaoCobranca> implements OnInit { 

    constructor(apiService: EmissaoCobrancaService, 
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
         //console.log(this.activeBean.emissaocobranca.id); 
     } 
} 

