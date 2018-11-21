import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Itiv} from '../itiv'; 
import {ItivService} from '../itiv.service'; 
import {ImovelService} from '../../imovel/imovel.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 

@Component({
 selector: 'gov-itiv-form', 
 templateUrl: './itiv-form.component.html', 
 //styleUrls: ['./itiv-form.component.css'] 
}) 
export class ItivFormComponent extends CommonsForm<Itiv> implements OnInit { 

    constructor(apiService: ItivService, 
                            private imovelService: ImovelService, 
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
             case 'imovel': { 
                 return this.imovelService; 
             } 

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
             case 'imovel': { 
                 return this.buildLookupFilter('trb_imovel'); 
             }

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
         //console.log(this.activeBean.itiv.id); 
     } 
} 

