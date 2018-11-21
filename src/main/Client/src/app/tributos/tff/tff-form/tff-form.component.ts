import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Tff} from '../tff'; 
import {TffService} from '../tff.service'; 
import {EmpresaService} from '../../empresa/empresa.service'; 
import {PorteEmpresaService} from '../../porteempresa/porteempresa.service'; 
import {SimplesNacionalService} from '../../simplesnacional/simplesnacional.service'; 
import {DeclaracaoFiscalService} from '../../declaracaofiscal/declaracaofiscal.service'; 

@Component({
 selector: 'gov-tff-form', 
 templateUrl: './tff-form.component.html', 
 //styleUrls: ['./tff-form.component.css'] 
}) 
export class TffFormComponent extends CommonsForm<Tff> implements OnInit { 

    constructor(apiService: TffService, 
                            private empresaService: EmpresaService, 
                            private porteempresaService: PorteEmpresaService, 
                            private simplesnacionalService: SimplesNacionalService, 
                            private declaracaofiscalService: DeclaracaoFiscalService, 
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

             case 'porteempresa': { 
                 return this.porteempresaService; 
             } 

             case 'simplesnacional': { 
                 return this.simplesnacionalService; 
             } 

             case 'declaracaofiscal': { 
                 return this.declaracaofiscalService; 
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

             case 'porteempresa': { 
                 return this.buildLookupFilter('trb_porteempresa'); 
             }

             case 'simplesnacional': { 
                 return this.buildLookupFilter('trb_simplesnacional'); 
             }

             case 'declaracaofiscal': { 
                 return this.buildLookupFilter('trb_declaracaofiscal'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.tff.id); 
     } 
} 

