import { RouterModule } from '@angular/router'; 
 
import {StatusDeclaracaoEletronicaGridComponent} from './statusdeclaracaoeletronica-grid/statusdeclaracaoeletronica-grid.component'; 
import {StatusDeclaracaoEletronicaFormComponent} from './statusdeclaracaoeletronica-form/statusdeclaracaoeletronica-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {StatusDeclaracaoEletronicaService} from './statusdeclaracaoeletronica.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: StatusDeclaracaoEletronicaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: StatusDeclaracaoEletronicaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                StatusDeclaracaoEletronicaGridComponent, 
                StatusDeclaracaoEletronicaFormComponent, 
                ], 
                entryComponents: [StatusDeclaracaoEletronicaGridComponent,StatusDeclaracaoEletronicaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class StatusDeclaracaoEletronicaModule {} 
