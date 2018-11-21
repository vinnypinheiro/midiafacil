import { RouterModule } from '@angular/router'; 
 
import {CertidaoEmitidaGridComponent} from './certidaoemitida-grid/certidaoemitida-grid.component'; 
import {CertidaoEmitidaFormComponent} from './certidaoemitida-form/certidaoemitida-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CertidaoEmitidaService} from './certidaoemitida.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CertidaoEmitidaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CertidaoEmitidaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CertidaoEmitidaGridComponent, 
                CertidaoEmitidaFormComponent, 
                ], 
                entryComponents: [CertidaoEmitidaGridComponent,CertidaoEmitidaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CertidaoEmitidaModule {} 
