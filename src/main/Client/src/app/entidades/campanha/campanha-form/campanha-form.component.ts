import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Campanha} from '../campanha'; 
import {CampanhaService} from '../campanha.service'; 
import {ClienteService} from '../../cliente/cliente.service';
import {Cliente} from "../../cliente/cliente";
import {FormBuilder} from "@angular/forms";
import {fuseAnimations} from "../../../../@fuse/animations";

@Component({
 selector: 'gov-campanha-form', 
 templateUrl: './campanha-form.component.html', 
 styleUrls: ['./campanha-form-component.scss'],
    animations   : fuseAnimations,
}) 
export class CampanhaFormComponent extends CommonsForm<Campanha> implements OnInit {

    cliente: Cliente[] = [];

    constructor(private fb: FormBuilder,
        apiService: CampanhaService,
                            private clienteService: ClienteService, 
                route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() {
         this.clienteService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
             this.cliente = response.content;

         });
     }

    //campanha reactive form
    activeForm = this.fb.group({
        datafim: null,
        datainicio: null,
        nome: null,
        cliente_id:  null,

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
             case 'cliente': { 
                 return this.clienteService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'cliente': { 
                 return this.buildLookupFilter('cliente'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 

     } 
} 

