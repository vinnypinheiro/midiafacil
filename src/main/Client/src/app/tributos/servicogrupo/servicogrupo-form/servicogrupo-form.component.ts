import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ServicoGrupo} from '../servicogrupo'; 
import {ServicoGrupoService} from '../servicogrupo.service'; 

@Component({
 selector: 'gov-servicogrupo-form', 
 templateUrl: './servicogrupo-form.component.html', 
 //styleUrls: ['./servicogrupo-form.component.css'] 
}) 
export class ServicoGrupoFormComponent extends CommonsForm<ServicoGrupo> implements OnInit { 

    constructor(apiService: ServicoGrupoService, 
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
         //console.log(this.activeBean.servicogrupo.id); 
     } 
} 

