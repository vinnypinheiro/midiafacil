import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {PadraoConstrutivo} from '../padraoconstrutivo'; 
import {PadraoConstrutivoService} from '../padraoconstrutivo.service'; 

@Component({
 selector: 'gov-padraoconstrutivo-form', 
 templateUrl: './padraoconstrutivo-form.component.html', 
 //styleUrls: ['./padraoconstrutivo-form.component.css'] 
}) 
export class PadraoConstrutivoFormComponent extends CommonsForm<PadraoConstrutivo> implements OnInit { 

    constructor(apiService: PadraoConstrutivoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.padraoconstrutivo.id); 
     } 
} 

