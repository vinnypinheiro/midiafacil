import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {NotaFiscalAvulsa} from '../notafiscalavulsa'; 
import {NotaFiscalAvulsaService} from '../notafiscalavulsa.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {TipoLogradouroService} from '../../tipologradouro/tipologradouro.service'; 
import {CidadeService} from '../../cidade/cidade.service'; 
import {ServicoService} from '../../servico/servico.service'; 
import {StatusNotaFiscalService} from '../../statusnotafiscal/statusnotafiscal.service'; 
import {UnidadeGestoraService} from '../../unidadegestora/unidadegestora.service'; 

@Component({
 selector: 'gov-notafiscalavulsa-form', 
 templateUrl: './notafiscalavulsa-form.component.html', 
 //styleUrls: ['./notafiscalavulsa-form.component.css'] 
}) 
export class NotaFiscalAvulsaFormComponent extends CommonsForm<NotaFiscalAvulsa> implements OnInit { 

    constructor(apiService: NotaFiscalAvulsaService, 
                            private contribuinteService: ContribuinteService, 
                            private tipologradouroService: TipoLogradouroService, 
                            private cidadeService: CidadeService, 
                            private servicoService: ServicoService, 
                            private statusnotafiscalService: StatusNotaFiscalService, 
                            private unidadegestoraService: UnidadeGestoraService, 
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

             case 'tipologradouro': { 
                 return this.tipologradouroService; 
             } 

             case 'cidade': { 
                 return this.cidadeService; 
             } 

             case 'servico': { 
                 return this.servicoService; 
             } 

             case 'statusnotafiscal': { 
                 return this.statusnotafiscalService; 
             } 

             case 'unidadegestora': { 
                 return this.unidadegestoraService; 
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

             case 'tipologradouro': { 
                 return this.buildLookupFilter('trb_tipologradouro'); 
             }

             case 'cidade': { 
                 return this.buildLookupFilter('trb_cidade'); 
             }

             case 'servico': { 
                 return this.buildLookupFilter('trb_servico'); 
             }

             case 'statusnotafiscal': { 
                 return this.buildLookupFilter('trb_statusnotafiscal'); 
             }

             case 'unidadegestora': { 
                 return this.buildLookupFilter('trb_unidadegestora'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.notafiscalavulsa.id); 
     } 
} 

