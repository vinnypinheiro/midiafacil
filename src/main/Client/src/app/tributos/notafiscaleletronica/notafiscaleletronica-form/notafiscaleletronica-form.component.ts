import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {NotaFiscalEletronica} from '../notafiscaleletronica'; 
import {NotaFiscalEletronicaService} from '../notafiscaleletronica.service'; 
import {TipoLogradouroService} from '../../tipologradouro/tipologradouro.service'; 
import {CidadeService} from '../../cidade/cidade.service'; 
import {ServicoService} from '../../servico/servico.service'; 
import {EmpresaService} from '../../empresa/empresa.service'; 
import {CnaeService} from '../../cnae/cnae.service'; 
import {UnidadeGestoraService} from '../../unidadegestora/unidadegestora.service'; 
import {EnquadramentoFiscalService} from '../../enquadramentofiscal/enquadramentofiscal.service'; 
import {NaturezaTributacaoService} from '../../naturezatributacao/naturezatributacao.service'; 
import {SimplesNacionalService} from '../../simplesnacional/simplesnacional.service'; 
import {StatusNotaFiscalService} from '../../statusnotafiscal/statusnotafiscal.service'; 

@Component({
 selector: 'gov-notafiscaleletronica-form', 
 templateUrl: './notafiscaleletronica-form.component.html', 
 //styleUrls: ['./notafiscaleletronica-form.component.css'] 
}) 
export class NotaFiscalEletronicaFormComponent extends CommonsForm<NotaFiscalEletronica> implements OnInit { 

    constructor(apiService: NotaFiscalEletronicaService, 
                            private tipologradouroService: TipoLogradouroService, 
                            private cidadeService: CidadeService, 
                            private servicoService: ServicoService, 
                            private empresaService: EmpresaService, 
                            private cnaeService: CnaeService, 
                            private unidadegestoraService: UnidadeGestoraService, 
                            private enquadramentofiscalService: EnquadramentoFiscalService, 
                            private naturezatributacaoService: NaturezaTributacaoService, 
                            private simplesnacionalService: SimplesNacionalService, 
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
             case 'tipologradouro': { 
                 return this.tipologradouroService; 
             } 

             case 'cidade': { 
                 return this.cidadeService; 
             } 

             case 'servico': { 
                 return this.servicoService; 
             } 

             case 'empresa': { 
                 return this.empresaService; 
             } 

             case 'cnae': { 
                 return this.cnaeService; 
             } 

             case 'unidadegestora': { 
                 return this.unidadegestoraService; 
             } 

             case 'enquadramentofiscal': { 
                 return this.enquadramentofiscalService; 
             } 

             case 'naturezatributacao': { 
                 return this.naturezatributacaoService; 
             } 

             case 'simplesnacional': { 
                 return this.simplesnacionalService; 
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
             case 'tipologradouro': { 
                 return this.buildLookupFilter('trb_tipologradouro'); 
             }

             case 'cidade': { 
                 return this.buildLookupFilter('trb_cidade'); 
             }

             case 'servico': { 
                 return this.buildLookupFilter('trb_servico'); 
             }

             case 'empresa': { 
                 return this.buildLookupFilter('trb_empresa'); 
             }

             case 'cnae': { 
                 return this.buildLookupFilter('trb_cnae'); 
             }

             case 'unidadegestora': { 
                 return this.buildLookupFilter('trb_unidadegestora'); 
             }

             case 'enquadramentofiscal': { 
                 return this.buildLookupFilter('trb_enquadramentofiscal'); 
             }

             case 'naturezatributacao': { 
                 return this.buildLookupFilter('trb_naturezatributacao'); 
             }

             case 'simplesnacional': { 
                 return this.buildLookupFilter('trb_simplesnacional'); 
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
         //console.log(this.activeBean.notafiscaleletronica.id); 
     } 
} 

