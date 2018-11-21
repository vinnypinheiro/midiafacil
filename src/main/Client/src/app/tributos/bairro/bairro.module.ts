import { RouterModule } from '@angular/router'; 
 
import {BairroGridComponent} from './bairro-grid/bairro-grid.component'; 
import {BairroFormComponent} from './bairro-form/bairro-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: BairroGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: BairroFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  BairroGridComponent,
                  BairroFormComponent,
                ], 
                entryComponents: [
                  BairroGridComponent,
                  BairroFormComponent],
                schemas: [], 
                providers: [] 
                }) 
        export class BairroModule {} 
