import { RouterModule } from '@angular/router'; 
 
import {CnaeGridComponent} from './cnae-grid/cnae-grid.component'; 
import {CnaeFormComponent} from './cnae-form/cnae-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: CnaeGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: CnaeFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  CnaeGridComponent,
                  CnaeFormComponent,
                ], 
                entryComponents: [
                  CnaeGridComponent,
                  CnaeFormComponent
                ],
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeModule {} 
