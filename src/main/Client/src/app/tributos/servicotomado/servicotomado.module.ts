import { RouterModule } from '@angular/router'; 
 
import {ServicoTomadoGridComponent} from './servicotomado-grid/servicotomado-grid.component'; 
import {ServicoTomadoFormComponent} from './servicotomado-form/servicotomado-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ServicoTomadoService} from './servicotomado.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ServicoTomadoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ServicoTomadoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ServicoTomadoGridComponent, 
                ServicoTomadoFormComponent, 
                ], 
                entryComponents: [ServicoTomadoGridComponent,ServicoTomadoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ServicoTomadoModule {} 
