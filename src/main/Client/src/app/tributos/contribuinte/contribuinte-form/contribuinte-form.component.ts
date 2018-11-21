import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Contribuinte} from '../contribuinte'; 
import {ContribuinteService} from '../contribuinte.service'; 
import {NaturezaJuridicaService} from '../../naturezajuridica/naturezajuridica.service'; 
import {PaisService} from '../../pais/pais.service'; 
import {CidadeService} from '../../cidade/cidade.service'; 
import {TipoLogradouroService} from '../../tipologradouro/tipologradouro.service'; 

@Component({
 selector: 'gov-contribuinte-form', 
 templateUrl: './contribuinte-form.component.html', 
 //styleUrls: ['./contribuinte-form.component.css']
}) 
export class ContribuinteFormComponent extends CommonsForm<Contribuinte> implements OnInit { 

    constructor(apiService: ContribuinteService, 
                            private naturezajuridicaService: NaturezaJuridicaService, 
                            private paisService: PaisService, 
                            private cidadeService: CidadeService, 
                            private tipologradouroService: TipoLogradouroService, 
                route: ActivatedRoute,
                router: Router) {
         super(apiService, route, router);
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'naturezajuridica': { 
                 return this.naturezajuridicaService; 
             } 

             case 'pais': { 
                 return this.paisService; 
             } 

             case 'cidade': { 
                 return this.cidadeService; 
             } 

             case 'tipologradouro': { 
                 return this.tipologradouroService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'naturezajuridica': {
                 return this.buildLookupFilter('trb_naturezajuridica'); 
             }

             case 'pais': { 
                 return this.buildLookupFilter('trb_pais'); 
             }

             case 'cidade': { 
                 return this.buildLookupFilter('trb_cidade'); 
             }

             case 'tipologradouro': { 
                 return this.buildLookupFilter('trb_tipologradouro'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.contribuinte.id); 
     } 
} 

