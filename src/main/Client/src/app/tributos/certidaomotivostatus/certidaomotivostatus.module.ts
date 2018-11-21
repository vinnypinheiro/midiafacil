import { RouterModule } from '@angular/router'; 
 
import {CertidaoMotivoStatusGridComponent} from './certidaomotivostatus-grid/certidaomotivostatus-grid.component'; 
import {CertidaoMotivoStatusFormComponent} from './certidaomotivostatus-form/certidaomotivostatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CertidaoMotivoStatusService} from './certidaomotivostatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CertidaoMotivoStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CertidaoMotivoStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CertidaoMotivoStatusGridComponent, 
                CertidaoMotivoStatusFormComponent, 
                ], 
                entryComponents: [CertidaoMotivoStatusGridComponent,CertidaoMotivoStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CertidaoMotivoStatusModule {} 
