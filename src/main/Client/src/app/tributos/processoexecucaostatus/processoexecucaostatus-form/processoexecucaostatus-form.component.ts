import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ProcessoExecucaoStatus} from '../processoexecucaostatus'; 
import {ProcessoExecucaoStatusService} from '../processoexecucaostatus.service'; 

@Component({
 selector: 'gov-processoexecucaostatus-form', 
 templateUrl: './processoexecucaostatus-form.component.html', 
 //styleUrls: ['./processoexecucaostatus-form.component.css'] 
}) 
export class ProcessoExecucaoStatusFormComponent extends CommonsForm<ProcessoExecucaoStatus> implements OnInit { 

    constructor(apiService: ProcessoExecucaoStatusService, 
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
         //console.log(this.activeBean.processoexecucaostatus.id); 
     } 
} 

