import { RouterModule } from '@angular/router'; 
 
import {DepartamentoGridComponent} from './departamento-grid/departamento-grid.component'; 
import {DepartamentoFormComponent} from './departamento-form/departamento-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: DepartamentoGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: DepartamentoFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  DepartamentoGridComponent,
                  DepartamentoFormComponent,
                ], 
                entryComponents: [
                  DepartamentoGridComponent,
                  DepartamentoFormComponent
                ],
                schemas: [], 
                providers: [] 
                }) 
        export class DepartamentoModule {} 
