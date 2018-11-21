import { RouterModule } from '@angular/router'; 
 
import {NaturezaJuridicaGridComponent} from './naturezajuridica-grid/naturezajuridica-grid.component'; 
import {NaturezaJuridicaFormComponent} from './naturezajuridica-form/naturezajuridica-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                component: NaturezaJuridicaGridComponent,
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                component: NaturezaJuridicaFormComponent,
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [
                  RouterModule.forChild(ROUTES),
                  SharedModule
                ], 
                declarations: [ 
                  NaturezaJuridicaGridComponent,
                  NaturezaJuridicaFormComponent,
                ], 
                entryComponents: [
                  NaturezaJuridicaGridComponent,
                  NaturezaJuridicaFormComponent
                ],
                schemas: [], 
                providers: [] 
                }) 
        export class NaturezaJuridicaModule {} 
