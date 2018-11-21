import { RouterModule } from '@angular/router'; 
 
import {DistritoGridComponent} from './distrito-grid/distrito-grid.component'; 
import {DistritoFormComponent} from './distrito-form/distrito-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {DistritoService} from './distrito.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: DistritoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: DistritoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                DistritoGridComponent, 
                DistritoFormComponent, 
                ], 
                entryComponents: [DistritoGridComponent,DistritoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class DistritoModule {} 
