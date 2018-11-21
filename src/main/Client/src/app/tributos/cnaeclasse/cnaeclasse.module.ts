import { RouterModule } from '@angular/router'; 
 
import {CnaeClasseGridComponent} from './cnaeclasse-grid/cnaeclasse-grid.component'; 
import {CnaeClasseFormComponent} from './cnaeclasse-form/cnaeclasse-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: CnaeClasseGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: CnaeClasseFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  CnaeClasseGridComponent,
                  CnaeClasseFormComponent,
                ], 
                entryComponents: [
                  CnaeClasseGridComponent,
                  CnaeClasseFormComponent],
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeClasseModule {} 
