import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoMidia} from '../tipomidia'; 
import {TipoMidiaService} from '../tipomidia.service'; 
import {MaterialService} from '../../material/material.service';
import {fuseAnimations} from "../../../../@fuse/animations";
import {FormBuilder} from "@angular/forms";

@Component({
 selector: 'gov-tipomidia-form', 
 templateUrl: './tipomidia-form.component.html', 
 styleUrls: ['./tipomidia-form-component.scss'] ,

    animations   : fuseAnimations,
}) 
export class TipoMidiaFormComponent extends CommonsForm<TipoMidia> implements OnInit { 

    constructor(private fb: FormBuilder,
                apiService: TipoMidiaService,
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
         //console.log(this.activeBean.tipomidia.id); 
     } 
} 

