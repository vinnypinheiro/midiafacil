import { RouterModule } from '@angular/router'; 
 
import {DebitoParcelaGridComponent} from './debitoparcela-grid/debitoparcela-grid.component'; 
import {DebitoParcelaFormComponent} from './debitoparcela-form/debitoparcela-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: DebitoParcelaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: DebitoParcelaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                DebitoParcelaGridComponent, 
                DebitoParcelaFormComponent, 
                ], 
                entryComponents: [DebitoParcelaGridComponent,DebitoParcelaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class DebitoParcelaModule {} 
