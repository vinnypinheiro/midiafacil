import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ProcessoExecucaoHistorico} from '../processoexecucaohistorico'; 
import {ProcessoExecucaoHistoricoService} from '../processoexecucaohistorico.service'; 
import {ProcessoExecucaoService} from '../../processoexecucao/processoexecucao.service'; 
import {ProcessoExecucaoStatusService} from '../../processoexecucaostatus/processoexecucaostatus.service'; 

@Component({
 selector: 'gov-processoexecucaohistorico-form', 
 templateUrl: './processoexecucaohistorico-form.component.html', 
 //styleUrls: ['./processoexecucaohistorico-form.component.css'] 
}) 
export class ProcessoExecucaoHistoricoFormComponent extends CommonsForm<ProcessoExecucaoHistorico> implements OnInit { 

    constructor(apiService: ProcessoExecucaoHistoricoService, 
                            private processoexecucaoService: ProcessoExecucaoService, 
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
             case 'processoexecucao': { 
                 return this.processoexecucaoService; 
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
             case 'processoexecucao': { 
                 return this.buildLookupFilter('trb_processoexecucao'); 
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
         //console.log(this.activeBean.processoexecucaohistorico.id); 
     } 
} 

