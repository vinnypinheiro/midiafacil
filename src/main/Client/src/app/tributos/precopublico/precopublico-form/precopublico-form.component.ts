import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PrecoPublico} from '../precopublico'; 
import {PrecoPublicoService} from '../precopublico.service'; 
import {ConcessaoTransporteService} from '../../concessaotransporte/concessaotransporte.service'; 
import {TributoService} from '../../tributo/tributo.service'; 

@Component({
 selector: 'gov-precopublico-form', 
 templateUrl: './precopublico-form.component.html', 
 //styleUrls: ['./precopublico-form.component.css'] 
}) 
export class PrecoPublicoFormComponent extends CommonsForm<PrecoPublico> implements OnInit { 

    constructor(apiService: PrecoPublicoService, 
                            private concessaotransporteService: ConcessaoTransporteService, 
                            private tributoService: TributoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'concessaotransporte': { 
                 return this.concessaotransporteService; 
             } 

             case 'tributo': { 
                 return this.tributoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'concessaotransporte': { 
                 return this.buildLookupFilter('trb_concessaotransporte'); 
             }

             case 'tributo': { 
                 return this.buildLookupFilter('trb_tributo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.precopublico.id); 
     } 
} 

