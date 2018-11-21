import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ParcelamentoTributario} from '../parcelamentotributario'; 
import {ParcelamentoTributarioService} from '../parcelamentotributario.service'; 
import {TipoContribuinteService} from '../../tipocontribuinte/tipocontribuinte.service'; 
import {TributoService} from '../../tributo/tributo.service'; 
import {TipoParcelamentoTributarioService} from '../../tipoparcelamentotributario/tipoparcelamentotributario.service'; 

@Component({
 selector: 'gov-parcelamentotributario-form', 
 templateUrl: './parcelamentotributario-form.component.html', 
 //styleUrls: ['./parcelamentotributario-form.component.css'] 
}) 
export class ParcelamentoTributarioFormComponent extends CommonsForm<ParcelamentoTributario> implements OnInit { 

    constructor(apiService: ParcelamentoTributarioService, 
                            private tipocontribuinteService: TipoContribuinteService, 
                            private tributoService: TributoService, 
                            private tipoparcelamentotributarioService: TipoParcelamentoTributarioService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipocontribuinte': { 
                 return this.tipocontribuinteService; 
             } 

             case 'tributo': { 
                 return this.tributoService; 
             } 

             case 'tipoparcelamentotributario': { 
                 return this.tipoparcelamentotributarioService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipocontribuinte': { 
                 return this.buildLookupFilter('trb_tipocontribuinte'); 
             }

             case 'tributo': { 
                 return this.buildLookupFilter('trb_tributo'); 
             }

             case 'tipoparcelamentotributario': { 
                 return this.buildLookupFilter('trb_tipoparcelamentotributario'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.parcelamentotributario.id); 
     } 
} 

