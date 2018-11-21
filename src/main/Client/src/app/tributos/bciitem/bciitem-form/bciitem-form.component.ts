import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {BciItem} from '../bciitem'; 
import {BciItemService} from '../bciitem.service'; 
import {BciGrupoService} from '../../bcigrupo/bcigrupo.service'; 

@Component({
 selector: 'gov-bciitem-form', 
 templateUrl: './bciitem-form.component.html', 
 //styleUrls: ['./bciitem-form.component.css'] 
}) 
export class BciItemFormComponent extends CommonsForm<BciItem> implements OnInit { 

    constructor(apiService: BciItemService, 
                            private bcigrupoService: BciGrupoService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'bcigrupo': { 
                 return this.bcigrupoService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'bcigrupo': { 
                 return this.buildLookupFilter('trb_bcigrupo'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.bciitem.id); 
     } 
} 

