import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {VupConstrucao} from '../vupconstrucao'; 
import {VupConstrucaoService} from '../vupconstrucao.service'; 
import {TributoService} from '../../tributo/tributo.service'; 

@Component({
 selector: 'gov-vupconstrucao-form', 
 templateUrl: './vupconstrucao-form.component.html', 
 //styleUrls: ['./vupconstrucao-form.component.css'] 
}) 
export class VupConstrucaoFormComponent extends CommonsForm<VupConstrucao> implements OnInit { 

    constructor(apiService: VupConstrucaoService, 
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
         //console.log(this.activeBean.vupconstrucao.id); 
     } 
} 

