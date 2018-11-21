import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Setor} from '../setor'; 
import {SetorService} from '../setor.service'; 
import {DistritoService} from '../../distrito/distrito.service'; 

@Component({
 selector: 'gov-setor-form', 
 templateUrl: './setor-form.component.html', 
 //styleUrls: ['./setor-form.component.css'] 
}) 
export class SetorFormComponent extends CommonsForm<Setor> implements OnInit { 

    constructor(apiService: SetorService, 
                            private distritoService: DistritoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'distrito': { 
                 return this.distritoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'distrito': { 
                 return this.buildLookupFilter('trb_distrito'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.setor.id); 
     } 
} 

