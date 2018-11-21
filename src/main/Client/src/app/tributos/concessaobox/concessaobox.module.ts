import { RouterModule } from '@angular/router'; 
 
import {ConcessaoBoxGridComponent} from './concessaobox-grid/concessaobox-grid.component'; 
import {ConcessaoBoxFormComponent} from './concessaobox-form/concessaobox-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ConcessaoBoxService} from './concessaobox.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ConcessaoBoxGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ConcessaoBoxFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ConcessaoBoxGridComponent, 
                ConcessaoBoxFormComponent, 
                ], 
                entryComponents: [ConcessaoBoxGridComponent,ConcessaoBoxFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ConcessaoBoxModule {} 
