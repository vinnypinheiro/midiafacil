import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ContaBancaria} from '../contabancaria'; 
import {ContaBancariaService} from '../contabancaria.service'; 
import {UnidadeGestoraService} from '../../unidadegestora/unidadegestora.service'; 
import {TipoContaService} from '../../tipoconta/tipoconta.service'; 
import {BancoService} from '../../banco/banco.service'; 

@Component({
 selector: 'gov-contabancaria-form', 
 templateUrl: './contabancaria-form.component.html', 
 //styleUrls: ['./contabancaria-form.component.css'] 
}) 
export class ContaBancariaFormComponent extends CommonsForm<ContaBancaria> implements OnInit { 

    constructor(apiService: ContaBancariaService, 
                            private unidadegestoraService: UnidadeGestoraService, 
                            private tipocontaService: TipoContaService, 
                            private bancoService: BancoService, 
                route: ActivatedRoute, 
                router: Router ) {
         super(apiService, route, router); 
    }

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'unidadegestora': { 
                 return this.unidadegestoraService; 
             } 

             case 'tipoconta': { 
                 return this.tipocontaService; 
             } 

             case 'banco': { 
                 return this.bancoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'unidadegestora': { 
                 return this.buildLookupFilter('trb_unidadegestora'); 
             }

             case 'tipoconta': { 
                 return this.buildLookupFilter('trb_tipoconta'); 
             }

             case 'banco': { 
                 return this.buildLookupFilter('trb_banco'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.contabancaria.id); 
     } 
} 

