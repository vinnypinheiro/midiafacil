import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {EmpresaServico} from '../empresaservico'; 
import {EmpresaServicoService} from '../empresaservico.service'; 
import {EmpresaService} from '../../empresa/empresa.service'; 
import {ServicoService} from '../../servico/servico.service'; 

@Component({
 selector: 'gov-empresaservico-form', 
 templateUrl: './empresaservico-form.component.html', 
 //styleUrls: ['./empresaservico-form.component.css'] 
}) 
export class EmpresaServicoFormComponent extends CommonsForm<EmpresaServico> implements OnInit { 

    constructor(apiService: EmpresaServicoService, 
                            private empresaService: EmpresaService, 
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
             case 'empresa': { 
                 return this.empresaService; 
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
             case 'empresa': { 
                 return this.buildLookupFilter('trb_empresa'); 
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
         //console.log(this.activeBean.empresaservico.id); 
     } 
} 

