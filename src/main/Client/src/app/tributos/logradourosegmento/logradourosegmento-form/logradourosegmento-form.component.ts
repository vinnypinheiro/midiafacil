import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {LogradouroSegmento} from '../logradourosegmento'; 
import {LogradouroSegmentoService} from '../logradourosegmento.service'; 
import {BairroService} from '../../bairro/bairro.service'; 
import {LogradouroService} from '../../logradouro/logradouro.service'; 

@Component({
 selector: 'gov-logradourosegmento-form', 
 templateUrl: './logradourosegmento-form.component.html', 
 //styleUrls: ['./logradourosegmento-form.component.css'] 
}) 
export class LogradouroSegmentoFormComponent extends CommonsForm<LogradouroSegmento> implements OnInit { 

    constructor(apiService: LogradouroSegmentoService, 
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
         //console.log(this.activeBean.logradourosegmento.id); 
     } 
} 

