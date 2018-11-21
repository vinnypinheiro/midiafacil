import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {ProcessoExecucaoItem} from '../processoexecucaoitem'; 
import {ProcessoExecucaoItemService} from '../processoexecucaoitem.service'; 
import {ProcessoExecucaoService} from '../../processoexecucao/processoexecucao.service'; 
import {DividaAtivaItemService} from '../../dividaativaitem/dividaativaitem.service'; 

@Component({
 selector: 'gov-processoexecucaoitem-form', 
 templateUrl: './processoexecucaoitem-form.component.html', 
 //styleUrls: ['./processoexecucaoitem-form.component.css'] 
}) 
export class ProcessoExecucaoItemFormComponent extends CommonsForm<ProcessoExecucaoItem> implements OnInit { 

    constructor(apiService: ProcessoExecucaoItemService, 
                            private processoexecucaoService: ProcessoExecucaoService, 
                            private dividaativaitemService: DividaAtivaItemService, 
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

             case 'dividaativaitem': { 
                 return this.dividaativaitemService; 
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

             case 'dividaativaitem': { 
                 return this.buildLookupFilter('trb_dividaativaitem'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.processoexecucaoitem.id); 
     } 
} 

