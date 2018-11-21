import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CreditoBancario} from '../creditobancario'; 
import {CreditoBancarioService} from '../creditobancario.service'; 
import {BancoService} from '../../banco/banco.service'; 
import {CreditoBancarioStatusService} from '../../creditobancariostatus/creditobancariostatus.service'; 

@Component({
 selector: 'gov-creditobancario-form', 
 templateUrl: './creditobancario-form.component.html', 
 //styleUrls: ['./creditobancario-form.component.css'] 
}) 
export class CreditoBancarioFormComponent extends CommonsForm<CreditoBancario> implements OnInit { 

    constructor(apiService: CreditoBancarioService, 
                            private bancoService: BancoService, 
                            private creditobancariostatusService: CreditoBancarioStatusService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'banco': { 
                 return this.bancoService; 
             } 

             case 'creditobancariostatus': { 
                 return this.creditobancariostatusService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'banco': { 
                 return this.buildLookupFilter('trb_banco'); 
             }

             case 'creditobancariostatus': { 
                 return this.buildLookupFilter('trb_creditobancariostatus'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.creditobancario.id); 
     } 
} 

