import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Empresa} from '../empresa'; 
import {EmpresaService} from '../empresa.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {InscricaoStatusService} from '../../inscricaostatus/inscricaostatus.service'; 
import {MotivoStatusService} from '../../motivostatus/motivostatus.service'; 
import {CnaeService} from '../../cnae/cnae.service'; 
import {NaturezaOperacaoEmpresaService} from '../../naturezaoperacaoempresa/naturezaoperacaoempresa.service'; 
import {SimplesNacionalService} from '../../simplesnacional/simplesnacional.service'; 
import {PorteEmpresaService} from '../../porteempresa/porteempresa.service'; 
import {TipoConstituicaoEmpresaService} from '../../tipoconstituicaoempresa/tipoconstituicaoempresa.service'; 
import {TipoUnidadeEmpresaService} from '../../tipounidadeempresa/tipounidadeempresa.service'; 
import {EnquadramentoFiscalService} from '../../enquadramentofiscal/enquadramentofiscal.service'; 
import {DeclaracaoFiscalService} from '../../declaracaofiscal/declaracaofiscal.service'; 
import {TipoDeclaranteService} from '../../tipodeclarante/tipodeclarante.service'; 
import {RamoAtividadeService} from '../../ramoatividade/ramoatividade.service'; 
import {OrgaoRegistroEmpresaService} from '../../orgaoregistroempresa/orgaoregistroempresa.service';
import {NaturezaJuridicaService} from "../../naturezajuridica/naturezajuridica.service";

@Component({
 selector: 'gov-empresa-form', 
 templateUrl: './empresa-form.component.html', 
 //styleUrls: ['./empresa-form.component.css']
}) 
export class EmpresaFormComponent extends CommonsForm<Empresa> implements OnInit { 

    constructor(apiService: EmpresaService, 
                            private contribuinteService: ContribuinteService, 
                            private inscricaostatusService: InscricaoStatusService, 
                            private motivostatusService: MotivoStatusService, 
                            private cnaeService: CnaeService, 
                            private naturezaoperacaoempresaService: NaturezaOperacaoEmpresaService, 
                            private simplesnacionalService: SimplesNacionalService, 
                            private porteempresaService: PorteEmpresaService, 
                            private tipoconstituicaoempresaService: TipoConstituicaoEmpresaService, 
                            private tipounidadeempresaService: TipoUnidadeEmpresaService, 
                            private enquadramentofiscalService: EnquadramentoFiscalService, 
                            private declaracaofiscalService: DeclaracaoFiscalService, 
                            private tipodeclaranteService: TipoDeclaranteService, 
                            private ramoatividadeService: RamoAtividadeService, 
                            private orgaoregistroempresaService: OrgaoRegistroEmpresaService,
                            private naturejajuridicaService: NaturezaJuridicaService,
                route: ActivatedRoute,
                router: Router) {
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

             case 'inscricaostatus': { 
                 return this.inscricaostatusService; 
             } 

             case 'motivostatus': { 
                 return this.motivostatusService; 
             }

             case 'naturezajuridica':{
               return this.naturejajuridicaService
             }

             case 'cnae': { 
                 return this.cnaeService; 
             } 

             case 'naturezaoperacaoempresa': { 
                 return this.naturezaoperacaoempresaService; 
             } 

             case 'simplesnacional': { 
                 return this.simplesnacionalService; 
             } 

             case 'porteempresa': { 
                 return this.porteempresaService; 
             } 

             case 'tipoconstituicaoempresa': { 
                 return this.tipoconstituicaoempresaService; 
             } 

             case 'tipounidadeempresa': { 
                 return this.tipounidadeempresaService; 
             } 

             case 'enquadramentofiscal': { 
                 return this.enquadramentofiscalService; 
             } 

             case 'declaracaofiscal': { 
                 return this.declaracaofiscalService; 
             } 

             case 'tipodeclarante': { 
                 return this.tipodeclaranteService; 
             } 

             case 'ramoatividade': { 
                 return this.ramoatividadeService; 
             } 

             case 'orgaoregistroempresa': { 
                 return this.orgaoregistroempresaService; 
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

             case 'inscricaostatus': { 
                 return this.buildLookupFilter('trb_inscricaostatus'); 
             }

             case 'motivostatus': {
                 return this.buildLookupFilter('trb_motivostatus');
             }

             case 'naturezajuridica': {
               return this.buildLookupFilter('trb_naturezajuridica');
             }

             case 'cnae': { 
                 return this.buildLookupFilter('trb_cnae'); 
             }

             case 'naturezaoperacaoempresa': { 
                 return this.buildLookupFilter('trb_naturezaoperacaoempresa'); 
             }

             case 'simplesnacional': { 
                 return this.buildLookupFilter('trb_simplesnacional'); 
             }

             case 'porteempresa': { 
                 return this.buildLookupFilter('trb_porteempresa'); 
             }

             case 'tipoconstituicaoempresa': { 
                 return this.buildLookupFilter('trb_tipoconstituicaoempresa'); 
             }

             case 'tipounidadeempresa': { 
                 return this.buildLookupFilter('trb_tipounidadeempresa'); 
             }

             case 'enquadramentofiscal': { 
                 return this.buildLookupFilter('trb_enquadramentofiscal'); 
             }

             case 'declaracaofiscal': { 
                 return this.buildLookupFilter('trb_declaracaofiscal'); 
             }

             case 'tipodeclarante': { 
                 return this.buildLookupFilter('trb_tipodeclarante'); 
             }

             case 'ramoatividade': { 
                 return this.buildLookupFilter('trb_ramoatividade'); 
             }

             case 'orgaoregistroempresa': { 
                 return this.buildLookupFilter('trb_orgaoregistroempresa'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.empresa.id); 
     } 
} 

