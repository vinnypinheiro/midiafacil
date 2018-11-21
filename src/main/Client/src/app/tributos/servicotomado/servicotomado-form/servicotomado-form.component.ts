import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ServicoTomado} from '../servicotomado'; 
import {ServicoTomadoService} from '../servicotomado.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {ServicoService} from '../../servico/servico.service'; 
import {CidadeService} from '../../cidade/cidade.service'; 
import {TipoDocumentoFiscalService} from '../../tipodocumentofiscal/tipodocumentofiscal.service'; 
import {NaturezaTributacaoService} from '../../naturezatributacao/naturezatributacao.service'; 
import {ModuloServicoTomadoService} from '../../moduloservicotomado/moduloservicotomado.service'; 
import {StatusNotaFiscalService} from '../../statusnotafiscal/statusnotafiscal.service'; 

@Component({
 selector: 'gov-servicotomado-form', 
 templateUrl: './servicotomado-form.component.html', 
 //styleUrls: ['./servicotomado-form.component.css'] 
}) 
export class ServicoTomadoFormComponent extends CommonsForm<ServicoTomado> implements OnInit { 

    constructor(apiService: ServicoTomadoService, 
                            private contribuinteService: ContribuinteService, 
                            private servicoService: ServicoService, 
                            private cidadeService: CidadeService, 
                            private tipodocumentofiscalService: TipoDocumentoFiscalService, 
                            private naturezatributacaoService: NaturezaTributacaoService, 
                            private moduloservicotomadoService: ModuloServicoTomadoService, 
                            private statusnotafiscalService: StatusNotaFiscalService, 
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

             case 'servico': { 
                 return this.servicoService; 
             } 

             case 'cidade': { 
                 return this.cidadeService; 
             } 

             case 'tipodocumentofiscal': { 
                 return this.tipodocumentofiscalService; 
             } 

             case 'naturezatributacao': { 
                 return this.naturezatributacaoService; 
             } 

             case 'moduloservicotomado': { 
                 return this.moduloservicotomadoService; 
             } 

             case 'statusnotafiscal': { 
                 return this.statusnotafiscalService; 
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

             case 'servico': { 
                 return this.buildLookupFilter('trb_servico'); 
             }

             case 'cidade': { 
                 return this.buildLookupFilter('trb_cidade'); 
             }

             case 'tipodocumentofiscal': { 
                 return this.buildLookupFilter('trb_tipodocumentofiscal'); 
             }

             case 'naturezatributacao': { 
                 return this.buildLookupFilter('trb_naturezatributacao'); 
             }

             case 'moduloservicotomado': { 
                 return this.buildLookupFilter('trb_moduloservicotomado'); 
             }

             case 'statusnotafiscal': { 
                 return this.buildLookupFilter('trb_statusnotafiscal'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.servicotomado.id); 
     } 
} 

