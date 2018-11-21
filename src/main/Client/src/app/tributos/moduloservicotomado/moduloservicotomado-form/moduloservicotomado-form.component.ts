import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ModuloServicoTomado} from '../moduloservicotomado'; 
import {ModuloServicoTomadoService} from '../moduloservicotomado.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {TipoDeclaranteService} from '../../tipodeclarante/tipodeclarante.service'; 
import {TipoDeclaracaoService} from '../../tipodeclaracao/tipodeclaracao.service'; 
import {StatusDeclaracaoEletronicaService} from '../../statusdeclaracaoeletronica/statusdeclaracaoeletronica.service'; 

@Component({
 selector: 'gov-moduloservicotomado-form', 
 templateUrl: './moduloservicotomado-form.component.html', 
 //styleUrls: ['./moduloservicotomado-form.component.css'] 
}) 
export class ModuloServicoTomadoFormComponent extends CommonsForm<ModuloServicoTomado> implements OnInit { 

    constructor(apiService: ModuloServicoTomadoService, 
                            private contribuinteService: ContribuinteService, 
                            private tipodeclaranteService: TipoDeclaranteService, 
                            private tipodeclaracaoService: TipoDeclaracaoService, 
                            private statusdeclaracaoeletronicaService: StatusDeclaracaoEletronicaService, 
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

             case 'tipodeclarante': { 
                 return this.tipodeclaranteService; 
             } 

             case 'tipodeclaracao': { 
                 return this.tipodeclaracaoService; 
             } 

             case 'statusdeclaracaoeletronica': { 
                 return this.statusdeclaracaoeletronicaService; 
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

             case 'tipodeclarante': { 
                 return this.buildLookupFilter('trb_tipodeclarante'); 
             }

             case 'tipodeclaracao': { 
                 return this.buildLookupFilter('trb_tipodeclaracao'); 
             }

             case 'statusdeclaracaoeletronica': { 
                 return this.buildLookupFilter('trb_statusdeclaracaoeletronica'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.moduloservicotomado.id); 
     } 
} 

