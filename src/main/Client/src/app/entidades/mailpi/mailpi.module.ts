import { RouterModule } from '@angular/router'; 
 
import {MailPiGridComponent} from './mailpi-grid/mailpi-grid.component'; 
import {MailPiFormComponent} from './mailpi-form/mailpi-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {MailPiService} from './mailpi.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: MailPiGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: MailPiFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                MailPiGridComponent, 
                MailPiFormComponent, 
                ], 
                entryComponents: [MailPiGridComponent,MailPiFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class MailPiModule {} 
