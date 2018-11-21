import { RouterModule } from '@angular/router'; 
 
import {ResponsavelLegalGridComponent} from './responsavellegal-grid/responsavellegal-grid.component'; 
import {ResponsavelLegalFormComponent} from './responsavellegal-form/responsavellegal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ResponsavelLegalService} from './responsavellegal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ResponsavelLegalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ResponsavelLegalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ResponsavelLegalGridComponent, 
                ResponsavelLegalFormComponent, 
                ], 
                entryComponents: [ResponsavelLegalGridComponent,ResponsavelLegalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ResponsavelLegalModule {} 
