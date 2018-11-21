import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {AlvaraMotivoStatus} from '../alvaramotivostatus'; 
import {AlvaraMotivoStatusService} from '../alvaramotivostatus.service'; 

@Component({
 selector: 'gov-alvaramotivostatus-form', 
 templateUrl: './alvaramotivostatus-form.component.html', 
 //styleUrls: ['./alvaramotivostatus-form.component.css'] 
}) 
export class AlvaraMotivoStatusFormComponent extends CommonsForm<AlvaraMotivoStatus> implements OnInit { 

    constructor(apiService: AlvaraMotivoStatusService, 
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
         //console.log(this.activeBean.alvaramotivostatus.id); 
     } 
} 

