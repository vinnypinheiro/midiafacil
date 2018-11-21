import { RouterModule } from '@angular/router'; 
 
import {StatusSimplesNacionalGridComponent} from './statussimplesnacional-grid/statussimplesnacional-grid.component'; 
import {StatusSimplesNacionalFormComponent} from './statussimplesnacional-form/statussimplesnacional-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {StatusSimplesNacionalService} from './statussimplesnacional.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: StatusSimplesNacionalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: StatusSimplesNacionalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                StatusSimplesNacionalGridComponent, 
                StatusSimplesNacionalFormComponent, 
                ], 
                entryComponents: [StatusSimplesNacionalGridComponent,StatusSimplesNacionalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class StatusSimplesNacionalModule {} 
