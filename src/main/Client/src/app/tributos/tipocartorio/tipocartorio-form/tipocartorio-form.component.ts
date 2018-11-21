import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoCartorio} from '../tipocartorio'; 
import {TipoCartorioService} from '../tipocartorio.service'; 

@Component({
 selector: 'gov-tipocartorio-form', 
 templateUrl: './tipocartorio-form.component.html', 
 //styleUrls: ['./tipocartorio-form.component.css'] 
}) 
export class TipoCartorioFormComponent extends CommonsForm<TipoCartorio> implements OnInit { 

    constructor(apiService: TipoCartorioService, 
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
         //console.log(this.activeBean.tipocartorio.id); 
     } 
} 

