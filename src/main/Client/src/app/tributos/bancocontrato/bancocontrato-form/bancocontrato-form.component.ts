import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {BancoContrato} from '../bancocontrato'; 
import {BancoContratoService} from '../bancocontrato.service'; 
import {TipoBancoContratoService} from '../../tipobancocontrato/tipobancocontrato.service'; 
import {ContaBancariaService} from '../../contabancaria/contabancaria.service'; 

@Component({
 selector: 'gov-bancocontrato-form', 
 templateUrl: './bancocontrato-form.component.html', 
 //styleUrls: ['./bancocontrato-form.component.css'] 
}) 
export class BancoContratoFormComponent extends CommonsForm<BancoContrato> implements OnInit { 

    constructor(apiService: BancoContratoService, 
                            private tipobancocontratoService: TipoBancoContratoService, 
                            private contabancariaService: ContaBancariaService, 
                route: ActivatedRoute, 
                router: Router ) {
         super(apiService, route, router); 
    }

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipobancocontrato': { 
                 return this.tipobancocontratoService; 
             } 

             case 'contabancaria': { 
                 return this.contabancariaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipobancocontrato': { 
                 return this.buildLookupFilter('trb_tipobancocontrato'); 
             }

             case 'contabancaria': {

               return this.buildLookupFilter('trb_contabancaria');
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.bancocontrato.id); 
     } 
} 

