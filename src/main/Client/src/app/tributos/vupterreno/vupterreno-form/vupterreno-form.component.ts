import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {VupTerreno} from '../vupterreno'; 
import {VupTerrenoService} from '../vupterreno.service'; 
import {TributoService} from '../../tributo/tributo.service'; 
import {LogradouroSegmentoService} from '../../logradourosegmento/logradourosegmento.service'; 

@Component({
 selector: 'gov-vupterreno-form', 
 templateUrl: './vupterreno-form.component.html', 
 //styleUrls: ['./vupterreno-form.component.css'] 
}) 
export class VupTerrenoFormComponent extends CommonsForm<VupTerreno> implements OnInit { 

    constructor(apiService: VupTerrenoService, 
                            private tributoService: TributoService, 
                            private logradourosegmentoService: LogradouroSegmentoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tributo': { 
                 return this.tributoService; 
             } 

             case 'logradourosegmento': { 
                 return this.logradourosegmentoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tributo': { 
                 return this.buildLookupFilter('trb_tributo'); 
             }

             case 'logradourosegmento': { 
                 return this.buildLookupFilter('trb_logradourosegmento'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.vupterreno.id); 
     } 
} 

