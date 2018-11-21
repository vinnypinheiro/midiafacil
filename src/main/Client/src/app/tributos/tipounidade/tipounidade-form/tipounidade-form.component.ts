import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoUnidade} from '../tipounidade'; 
import {TipoUnidadeService} from '../tipounidade.service'; 

@Component({
 selector: 'gov-tipounidade-form', 
 templateUrl: './tipounidade-form.component.html', 
 //styleUrls: ['./tipounidade-form.component.css'] 
}) 
export class TipoUnidadeFormComponent extends CommonsForm<TipoUnidade> implements OnInit { 

    constructor(apiService: TipoUnidadeService, 
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
         //console.log(this.activeBean.tipounidade.id); 
     } 
} 

