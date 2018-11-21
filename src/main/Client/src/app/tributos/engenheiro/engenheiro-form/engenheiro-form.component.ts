import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Engenheiro} from '../engenheiro'; 
import {EngenheiroService} from '../engenheiro.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 

@Component({
 selector: 'gov-engenheiro-form', 
 templateUrl: './engenheiro-form.component.html', 
 //styleUrls: ['./engenheiro-form.component.css'] 
}) 
export class EngenheiroFormComponent extends CommonsForm<Engenheiro> implements OnInit { 

    constructor(apiService: EngenheiroService, 
                            private contribuinteService: ContribuinteService, 
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

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.engenheiro.id); 
     } 
} 

