import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Material} from '../material'; 
import {MaterialService} from '../material.service'; 
import {TipoMidiaService} from '../../tipomidia/tipomidia.service'; 

@Component({
 selector: 'gov-material-form', 
 templateUrl: './material-form.component.html', 
 //styleUrls: ['./material-form.component.css'] 
}) 
export class MaterialFormComponent extends CommonsForm<Material> implements OnInit { 

    constructor(apiService: MaterialService, 
                            private tipomidiaService: TipoMidiaService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'tipomidia': { 
                 return this.tipomidiaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'tipomidia': { 
                 return this.buildLookupFilter('tipomidia'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.material.id); 
     } 
} 

