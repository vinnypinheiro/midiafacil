import { RouterModule } from '@angular/router'; 
 
import {CidadeGridComponent} from './cidade-grid/cidade-grid.component'; 
import {CidadeFormComponent} from './cidade-form/cidade-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: CidadeGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: CidadeFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  CidadeGridComponent,
                  CidadeFormComponent,
                ], 
                entryComponents: [
                  CidadeGridComponent,
                  CidadeFormComponent],
                schemas: [], 
                providers: [] 
                }) 
        export class CidadeModule {} 
