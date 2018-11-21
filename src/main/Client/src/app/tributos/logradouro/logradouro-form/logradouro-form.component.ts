import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Logradouro} from '../logradouro'; 
import {LogradouroService} from '../logradouro.service'; 
import {TipoLogradouroService} from '../../tipologradouro/tipologradouro.service'; 

@Component({
 selector: 'gov-logradouro-form', 
 templateUrl: './logradouro-form.component.html', 
 //styleUrls: ['./logradouro-form.component.css'] 
}) 
export class LogradouroFormComponent extends CommonsForm<Logradouro> implements OnInit { 

    constructor(apiService: LogradouroService, 
                            private tipologradouroService: TipoLogradouroService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
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
         //console.log(this.activeBean.logradouro.id); 
     } 
} 

