import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Habitese} from '../habitese'; 
import {HabiteseService} from '../habitese.service'; 
import {ImovelService} from '../../imovel/imovel.service'; 

@Component({
 selector: 'gov-habitese-form', 
 templateUrl: './habitese-form.component.html', 
 //styleUrls: ['./habitese-form.component.css'] 
}) 
export class HabiteseFormComponent extends CommonsForm<Habitese> implements OnInit { 

    constructor(apiService: HabiteseService, 
                            private imovelService: ImovelService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'imovel': { 
                 return this.imovelService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'imovel': { 
                 return this.buildLookupFilter('trb_imovel'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.habitese.id); 
     } 
} 

