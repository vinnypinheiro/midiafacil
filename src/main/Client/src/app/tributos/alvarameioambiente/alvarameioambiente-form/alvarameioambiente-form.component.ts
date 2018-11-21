import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {AlvaraMeioAmbiente} from '../alvarameioambiente'; 
import {AlvaraMeioAmbienteService} from '../alvarameioambiente.service'; 
import {ContribuinteService} from '../../contribuinte/contribuinte.service'; 
import {AlvaraMotivoStatusService} from '../../alvaramotivostatus/alvaramotivostatus.service'; 

@Component({
 selector: 'gov-alvarameioambiente-form', 
 templateUrl: './alvarameioambiente-form.component.html', 
 //styleUrls: ['./alvarameioambiente-form.component.css'] 
}) 
export class AlvaraMeioAmbienteFormComponent extends CommonsForm<AlvaraMeioAmbiente> implements OnInit { 

    constructor(apiService: AlvaraMeioAmbienteService, 
                            private contribuinteService: ContribuinteService, 
                            private alvaramotivostatusService: AlvaraMotivoStatusService, 
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

             case 'alvaramotivostatus': { 
                 return this.alvaramotivostatusService; 
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

             case 'alvaramotivostatus': { 
                 return this.buildLookupFilter('trb_alvaramotivostatus'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.alvarameioambiente.id); 
     } 
} 

