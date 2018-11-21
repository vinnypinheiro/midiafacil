import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {LocalConcessaoBox} from '../localconcessaobox'; 
import {LocalConcessaoBoxService} from '../localconcessaobox.service'; 

@Component({
 selector: 'gov-localconcessaobox-form', 
 templateUrl: './localconcessaobox-form.component.html', 
 //styleUrls: ['./localconcessaobox-form.component.css'] 
}) 
export class LocalConcessaoBoxFormComponent extends CommonsForm<LocalConcessaoBox> implements OnInit { 

    constructor(apiService: LocalConcessaoBoxService, 
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
         //console.log(this.activeBean.localconcessaobox.id); 
     } 
} 

