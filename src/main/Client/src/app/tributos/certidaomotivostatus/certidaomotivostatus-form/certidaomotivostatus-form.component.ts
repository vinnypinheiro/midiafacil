import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {CertidaoMotivoStatus} from '../certidaomotivostatus'; 
import {CertidaoMotivoStatusService} from '../certidaomotivostatus.service'; 

@Component({
 selector: 'gov-certidaomotivostatus-form', 
 templateUrl: './certidaomotivostatus-form.component.html', 
 //styleUrls: ['./certidaomotivostatus-form.component.css'] 
}) 
export class CertidaoMotivoStatusFormComponent extends CommonsForm<CertidaoMotivoStatus> implements OnInit { 

    constructor(apiService: CertidaoMotivoStatusService, 
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
         //console.log(this.activeBean.certidaomotivostatus.id); 
     } 
} 

