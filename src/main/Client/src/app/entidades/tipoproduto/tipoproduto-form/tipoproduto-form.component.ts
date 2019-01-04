import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {TipoProduto} from '../tipoproduto'; 
import {TipoProdutoService} from '../tipoproduto.service'; 

@Component({
 selector: 'gov-tipoproduto-form', 
 templateUrl: './tipoproduto-form.component.html', 
 //styleUrls: ['./tipoproduto-form.component.css'] 
}) 
export class TipoProdutoFormComponent extends CommonsForm<TipoProduto> implements OnInit { 

    constructor(apiService: TipoProdutoService, 
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
         //console.log(this.activeBean.tipoproduto.id); 
     } 
} 

