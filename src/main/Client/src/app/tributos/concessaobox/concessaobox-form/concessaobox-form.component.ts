import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ConcessaoBox} from '../concessaobox'; 
import {ConcessaoBoxService} from '../concessaobox.service'; 
import {LocalConcessaoBoxService} from '../../localconcessaobox/localconcessaobox.service'; 

@Component({
 selector: 'gov-concessaobox-form', 
 templateUrl: './concessaobox-form.component.html', 
 //styleUrls: ['./concessaobox-form.component.css'] 
}) 
export class ConcessaoBoxFormComponent extends CommonsForm<ConcessaoBox> implements OnInit { 

    constructor(apiService: ConcessaoBoxService, 
                            private localconcessaoboxService: LocalConcessaoBoxService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'localconcessaobox': { 
                 return this.localconcessaoboxService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'localconcessaobox': { 
                 return this.buildLookupFilter('trb_localconcessaobox'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.concessaobox.id); 
     } 
} 

