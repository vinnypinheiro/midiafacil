import { RouterModule } from '@angular/router'; 
 
import {TipoOperadorGridComponent} from './tipooperador-grid/tipooperador-grid.component'; 
import {TipoOperadorFormComponent} from './tipooperador-form/tipooperador-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: TipoOperadorGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: TipoOperadorFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  TipoOperadorGridComponent,
                  TipoOperadorFormComponent,
                ], 
                entryComponents: [
                  TipoOperadorGridComponent,
                  TipoOperadorFormComponent
                ],
                schemas: [], 
                providers: [] 
                }) 
        export class TipoOperadorModule {} 
