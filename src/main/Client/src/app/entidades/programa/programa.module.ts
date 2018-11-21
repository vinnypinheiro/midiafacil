import { RouterModule } from '@angular/router'; 
 
import {ProgramaGridComponent} from './programa-grid/programa-grid.component'; 
import {ProgramaFormComponent} from './programa-form/programa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProgramaService} from './programa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProgramaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProgramaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProgramaGridComponent, 
                ProgramaFormComponent, 
                ], 
                entryComponents: [ProgramaGridComponent,ProgramaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProgramaModule {} 
