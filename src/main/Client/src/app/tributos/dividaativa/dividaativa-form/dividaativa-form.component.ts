import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {DividaAtiva} from '../dividaativa'; 
import {DividaAtivaService} from '../dividaativa.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {TributoService} from '../../tributo/tributo.service'; 
import {TipoDividaAtivaService} from '../../tipodividaativa/tipodividaativa.service'; 

@Component({
 selector: 'gov-dividaativa-form', 
 templateUrl: './dividaativa-form.component.html', 
 //styleUrls: ['./dividaativa-form.component.css'] 
}) 
export class DividaAtivaFormComponent extends CommonsForm<DividaAtiva> implements OnInit { 

    constructor(apiService: DividaAtivaService, 
                            private contribuinteService: ContribuinteService, 
                            private tributoService: TributoService, 
                            private tipodividaativaService: TipoDividaAtivaService, 
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

             case 'tributo': { 
                 return this.tributoService; 
             } 

             case 'tipodividaativa': { 
                 return this.tipodividaativaService; 
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

             case 'tributo': { 
                 return this.buildLookupFilter('trb_tributo'); 
             }

             case 'tipodividaativa': { 
                 return this.buildLookupFilter('trb_tipodividaativa'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.dividaativa.id); 
     } 
} 

