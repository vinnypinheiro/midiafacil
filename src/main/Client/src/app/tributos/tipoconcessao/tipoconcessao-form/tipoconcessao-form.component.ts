import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoConcessao} from '../tipoconcessao'; 
import {TipoConcessaoService} from '../tipoconcessao.service'; 

@Component({
 selector: 'gov-tipoconcessao-form', 
 templateUrl: './tipoconcessao-form.component.html', 
 //styleUrls: ['./tipoconcessao-form.component.css'] 
}) 
export class TipoConcessaoFormComponent extends CommonsForm<TipoConcessao> implements OnInit { 

    constructor(apiService: TipoConcessaoService, 
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
         //console.log(this.activeBean.tipoconcessao.id); 
     } 
} 

