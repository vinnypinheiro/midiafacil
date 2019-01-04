import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoMidiaDigital} from '../tipomidiadigital'; 
import {TipoMidiaDigitalService} from '../tipomidiadigital.service'; 

@Component({
 selector: 'gov-tipomidiadigital-form', 
 templateUrl: './tipomidiadigital-form.component.html', 
 //styleUrls: ['./tipomidiadigital-form.component.css'] 
}) 
export class TipoMidiaDigitalFormComponent extends CommonsForm<TipoMidiaDigital> implements OnInit { 

    constructor(apiService: TipoMidiaDigitalService, 
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
         //console.log(this.activeBean.tipomidiadigital.id); 
     } 
} 

