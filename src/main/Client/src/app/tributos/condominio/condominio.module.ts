import { RouterModule } from '@angular/router'; 
 
import {CondominioGridComponent} from './condominio-grid/condominio-grid.component'; 
import {CondominioFormComponent} from './condominio-form/condominio-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: CondominioGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: CondominioFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                CondominioGridComponent, 
                CondominioFormComponent, 
                ], 
                entryComponents: [
                  CondominioGridComponent,
                  CondominioFormComponent
                ],
                schemas: [], 
                providers: [] 
                }) 
        export class CondominioModule {} 
