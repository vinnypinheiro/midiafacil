import { RouterModule } from '@angular/router'; 
 
import {ContribuinteGridComponent} from './contribuinte-grid/contribuinte-grid.component'; 
import {ContribuinteFormComponent} from './contribuinte-form/contribuinte-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: ContribuinteGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: ContribuinteFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  ContribuinteGridComponent,
                  ContribuinteFormComponent,
                ], 
                entryComponents: [
                  ContribuinteGridComponent,
                  ContribuinteFormComponent
                ],
                schemas: [], 
                providers: [] 
                }) 
export class ContribuinteModule {} 
