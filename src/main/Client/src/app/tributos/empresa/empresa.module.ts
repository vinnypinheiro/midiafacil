import { RouterModule } from '@angular/router'; 
 
import {EmpresaGridComponent} from './empresa-grid/empresa-grid.component'; 
import {EmpresaFormComponent} from './empresa-form/empresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {EmpresaService} from './empresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: EmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: EmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                EmpresaGridComponent, 
                EmpresaFormComponent, 
                ], 
                entryComponents: [EmpresaGridComponent,EmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class EmpresaModule {} 
