import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CnaeServico} from '../cnaeservico'; 
import {CnaeServicoService} from '../cnaeservico.service'; 
import {CnaeService} from '../../cnae/cnae.service'; 
import {ServicoService} from '../../servico/servico.service'; 

@Component({
 selector: 'gov-cnaeservico-form', 
 templateUrl: './cnaeservico-form.component.html', 
 //styleUrls: ['./cnaeservico-form.component.css'] 
}) 
export class CnaeServicoFormComponent extends CommonsForm<CnaeServico> implements OnInit { 

    constructor(apiService: CnaeServicoService, 
                            private cnaeService: CnaeService, 
                            private servicoService: ServicoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'cnae': { 
                 return this.cnaeService; 
             } 

             case 'servico': { 
                 return this.servicoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cnae': { 
                 return this.buildLookupFilter('trb_cnae'); 
             }

             case 'servico': { 
                 return this.buildLookupFilter('trb_servico'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cnaeservico.id); 
     } 
} 

