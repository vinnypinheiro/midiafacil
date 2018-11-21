import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Servico} from '../servico'; 
import {ServicoService} from '../servico.service'; 
import {ServicoGrupoService} from '../../servicogrupo/servicogrupo.service'; 

@Component({
 selector: 'gov-servico-form', 
 templateUrl: './servico-form.component.html', 
 //styleUrls: ['./servico-form.component.css'] 
}) 
export class ServicoFormComponent extends CommonsForm<Servico> implements OnInit { 

    constructor(apiService: ServicoService, 
                            private servicogrupoService: ServicoGrupoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'servicogrupo': { 
                 return this.servicogrupoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'servicogrupo': { 
                 return this.buildLookupFilter('trb_servicogrupo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.servico.id); 
     } 
} 

