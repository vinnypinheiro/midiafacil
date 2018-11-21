import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Loteamento} from '../loteamento'; 
import {LoteamentoService} from '../loteamento.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {BairroService} from '../../bairro/bairro.service'; 
import {LogradouroService} from '../../logradouro/logradouro.service'; 

@Component({
 selector: 'gov-loteamento-form', 
 templateUrl: './loteamento-form.component.html', 
 //styleUrls: ['./loteamento-form.component.css'] 
}) 
export class LoteamentoFormComponent extends CommonsForm<Loteamento> implements OnInit { 

    constructor(apiService: LoteamentoService, 
                            private contribuinteService: ContribuinteService, 
                            private bairroService: BairroService, 
                            private logradouroService: LogradouroService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'contribuinte': { 
                 return this.contribuinteService; 
             } 

             case 'bairro': { 
                 return this.bairroService; 
             } 

             case 'logradouro': { 
                 return this.logradouroService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'contribuinte': { 
                 return this.buildLookupFilter('trb_contribuinte'); 
             }

             case 'bairro': { 
                 return this.buildLookupFilter('trb_bairro'); 
             }

             case 'logradouro': { 
                 return this.buildLookupFilter('trb_logradouro'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.loteamento.id); 
     } 
} 

