import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ProcessoExecucao} from '../processoexecucao'; 
import {ProcessoExecucaoService} from '../processoexecucao.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {ProcessoExecucaoStatusService} from '../../processoexecucaostatus/processoexecucaostatus.service'; 

@Component({
 selector: 'gov-processoexecucao-form', 
 templateUrl: './processoexecucao-form.component.html', 
 //styleUrls: ['./processoexecucao-form.component.css'] 
}) 
export class ProcessoExecucaoFormComponent extends CommonsForm<ProcessoExecucao> implements OnInit { 

    constructor(apiService: ProcessoExecucaoService, 
                            private contribuinteService: ContribuinteService, 
                            private processoexecucaostatusService: ProcessoExecucaoStatusService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         super.ngOnInit(); 
     } 

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'contribuinte': { 
                 return this.contribuinteService; 
             } 

             case 'processoexecucaostatus': { 
                 return this.processoexecucaostatusService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'contribuinte': { 
                 return this.buildLookupFilter('trb_contribuinte'); 
             }

             case 'processoexecucaostatus': { 
                 return this.buildLookupFilter('trb_processoexecucaostatus'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.processoexecucao.id); 
     } 
} 

