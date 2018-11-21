import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {OperadorEmpresa} from '../operadorempresa'; 
import {OperadorEmpresaService} from '../operadorempresa.service'; 
import {TipoOperadorService} from '../../tipooperador/tipooperador.service'; 
import {EmpresaService} from '../../empresa/empresa.service'; 
import {PaisService} from '../../pais/pais.service'; 
import {NaturezaJuridicaService} from '../../naturezajuridica/naturezajuridica.service'; 
import {TipoLogradouroService} from '../../tipologradouro/tipologradouro.service'; 
import {CidadeService} from '../../cidade/cidade.service'; 

@Component({
 selector: 'gov-operadorempresa-form', 
 templateUrl: './operadorempresa-form.component.html', 
 //styleUrls: ['./operadorempresa-form.component.css'] 
}) 
export class OperadorEmpresaFormComponent extends CommonsForm<OperadorEmpresa> implements OnInit { 

    constructor(apiService: OperadorEmpresaService, 
                            private tipooperadorService: TipoOperadorService, 
                            private empresaService: EmpresaService, 
                            private paisService: PaisService, 
                            private naturezajuridicaService: NaturezaJuridicaService, 
                            private tipologradouroService: TipoLogradouroService, 
                            private cidadeService: CidadeService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipooperador': { 
                 return this.tipooperadorService; 
             } 

             case 'empresa': { 
                 return this.empresaService; 
             } 

             case 'pais': { 
                 return this.paisService; 
             } 

             case 'naturezajuridica': { 
                 return this.naturezajuridicaService; 
             } 

             case 'tipologradouro': { 
                 return this.tipologradouroService; 
             } 

             case 'cidade': { 
                 return this.cidadeService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipooperador': { 
                 return this.buildLookupFilter('trb_tipooperador'); 
             }

             case 'empresa': { 
                 return this.buildLookupFilter('trb_empresa'); 
             }

             case 'pais': { 
                 return this.buildLookupFilter('trb_pais'); 
             }

             case 'naturezajuridica': { 
                 return this.buildLookupFilter('trb_naturezajuridica'); 
             }

             case 'tipologradouro': { 
                 return this.buildLookupFilter('trb_tipologradouro'); 
             }

             case 'cidade': { 
                 return this.buildLookupFilter('trb_cidade'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.operadorempresa.id); 
     } 
} 

