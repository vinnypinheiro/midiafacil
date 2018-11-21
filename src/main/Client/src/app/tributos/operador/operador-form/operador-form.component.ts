import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Operador} from '../operador'; 
import {OperadorService} from '../operador.service'; 
import {TipoOperadorService} from '../../tipooperador/tipooperador.service'; 
import {DepartamentoService} from '../../departamento/departamento.service'; 
import {NaturezaJuridicaService} from '../../naturezajuridica/naturezajuridica.service'; 
import {PaisService} from '../../pais/pais.service'; 
import {CidadeService} from '../../cidade/cidade.service';
import {TipoLogradouroService} from "../../tipologradouro/tipologradouro.service";
import {LogradouroService} from "../../logradouro/logradouro.service";
import {BairroService} from "../../bairro/bairro.service";

@Component({
 selector: 'gov-operador-form', 
 templateUrl: './operador-form.component.html', 
 //styleUrls: ['./operador-form.component.css'] 
}) 
export class OperadorFormComponent extends CommonsForm<Operador> implements OnInit { 

    constructor(apiService: OperadorService, 
                            private tipooperadorService: TipoOperadorService, 
                            private departamentoService: DepartamentoService, 
                            private naturezajuridicaService: NaturezaJuridicaService, 
                            private paisService: PaisService, 
                            private cidadeService: CidadeService,
                            private tipologradouroService: TipoLogradouroService,
                            private logradouroService: LogradouroService,
                            private bairroService: BairroService,
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

             case 'departamento': { 
                 return this.departamentoService; 
             } 

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

           case 'logradouro': {
             return this.logradouroService;
           }

           case 'bairro': {
             return this.bairroService;
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

             case 'departamento': { 
                 return this.buildLookupFilter('trb_departamento'); 
             }

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

           case 'logradouro': {
             return this.buildLookupFilter('trb_logradouro');
           }

           case 'bairro': {
             return this.buildLookupFilter('trb_bairro');
           }


           default: {
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.operador.id); 
     } 
} 

