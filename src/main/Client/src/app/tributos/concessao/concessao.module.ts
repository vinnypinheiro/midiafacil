import { RouterModule } from '@angular/router'; 
 
import {ConcessaoGridComponent} from './concessao-grid/concessao-grid.component'; 
import {ConcessaoFormComponent} from './concessao-form/concessao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ConcessaoService} from './concessao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ConcessaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ConcessaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ConcessaoGridComponent, 
                ConcessaoFormComponent, 
                ], 
                entryComponents: [ConcessaoGridComponent,ConcessaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ConcessaoModule {} 
