import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Cartorio} from '../cartorio'; 
import {CartorioService} from '../cartorio.service'; 
import {TipoCartorioService} from '../../tipocartorio/tipocartorio.service'; 
import {CidadeService} from '../../cidade/cidade.service'; 

@Component({
 selector: 'gov-cartorio-form', 
 templateUrl: './cartorio-form.component.html', 
 //styleUrls: ['./cartorio-form.component.css'] 
}) 
export class CartorioFormComponent extends CommonsForm<Cartorio> implements OnInit { 

    constructor(apiService: CartorioService, 
                            private tipocartorioService: TipoCartorioService, 
                            private cidadeService: CidadeService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipocartorio': { 
                 return this.tipocartorioService; 
             } 

             case 'cidade': { 
                 return this.cidadeService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipocartorio': { 
                 return this.buildLookupFilter('trb_tipocartorio'); 
             }

             case 'cidade': { 
                 return this.buildLookupFilter('trb_cidade'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cartorio.id); 
     } 
} 

