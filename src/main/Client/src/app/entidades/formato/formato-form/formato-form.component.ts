import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Formato} from '../formato'; 
import {FormatoService} from '../formato.service'; 
import {MaterialService} from '../../material/material.service';

import {FormBuilder} from "@angular/forms";
import {fuseAnimations} from "../../../../@fuse/animations";

@Component({
 selector: 'gov-formato-form', 
 templateUrl: './formato-form.component.html', 
  styleUrls: ['./formato-form-component.scss'] ,
    animations   : fuseAnimations,
}) 
export class FormatoFormComponent extends CommonsForm<Formato> implements OnInit {



    constructor(private fb: FormBuilder,
                apiService: FormatoService,
                            private materialService: MaterialService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() {

     }

    //campanha reactive form
    activeForm = this.fb.group({
        nome: null,

    });

    saveEntity() {
        // TODO: Use EventEmitter with form value
        console.warn(this.activeForm.value);
        this.activeBean = this.activeForm.value;
        this.save();
        //this.apiService.save(this.clienteForm.value);
    }

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'material': { 
                 return this.materialService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'material': { 
                 return this.buildLookupFilter('material'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.formato.id); 
     } 
} 

