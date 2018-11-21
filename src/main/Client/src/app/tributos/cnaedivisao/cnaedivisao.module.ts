import { RouterModule } from '@angular/router'; 
 
import {CnaeDivisaoGridComponent} from './cnaedivisao-grid/cnaedivisao-grid.component'; 
import {CnaeDivisaoFormComponent} from './cnaedivisao-form/cnaedivisao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CnaeDivisaoService} from './cnaedivisao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CnaeDivisaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CnaeDivisaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CnaeDivisaoGridComponent, 
                CnaeDivisaoFormComponent, 
                ], 
                entryComponents: [CnaeDivisaoGridComponent,CnaeDivisaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeDivisaoModule {} 
