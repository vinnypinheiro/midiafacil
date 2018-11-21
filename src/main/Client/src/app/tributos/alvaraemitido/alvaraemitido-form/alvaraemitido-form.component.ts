import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {AlvaraEmitido} from '../alvaraemitido'; 
import {AlvaraEmitidoService} from '../alvaraemitido.service'; 
import {EngenheiroService} from '../../engenheiro/engenheiro.service'; 
import {TipoAlvaraService} from '../../tipoalvara/tipoalvara.service'; 
import {TipoUsoAlvaraService} from '../../tipousoalvara/tipousoalvara.service'; 
import {AlvaraMotivoStatusService} from '../../alvaramotivostatus/alvaramotivostatus.service'; 

@Component({
 selector: 'gov-alvaraemitido-form', 
 templateUrl: './alvaraemitido-form.component.html', 
 //styleUrls: ['./alvaraemitido-form.component.css'] 
}) 
export class AlvaraEmitidoFormComponent extends CommonsForm<AlvaraEmitido> implements OnInit { 

    constructor(apiService: AlvaraEmitidoService, 
                            private engenheiroService: EngenheiroService, 
                            private tipoalvaraService: TipoAlvaraService, 
                            private tipousoalvaraService: TipoUsoAlvaraService, 
                            private alvaramotivostatusService: AlvaraMotivoStatusService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'engenheiro': { 
                 return this.engenheiroService; 
             } 

             case 'tipoalvara': { 
                 return this.tipoalvaraService; 
             } 

             case 'tipousoalvara': { 
                 return this.tipousoalvaraService; 
             } 

             case 'alvaramotivostatus': { 
                 return this.alvaramotivostatusService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'engenheiro': { 
                 return this.buildLookupFilter('trb_engenheiro'); 
             }

             case 'tipoalvara': { 
                 return this.buildLookupFilter('trb_tipoalvara'); 
             }

             case 'tipousoalvara': { 
                 return this.buildLookupFilter('trb_tipousoalvara'); 
             }

             case 'alvaramotivostatus': { 
                 return this.buildLookupFilter('trb_alvaramotivostatus'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.alvaraemitido.id); 
     } 
} 

