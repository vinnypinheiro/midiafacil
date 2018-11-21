import { RouterModule } from '@angular/router'; 
 
import {ModuloServicoTomadoGridComponent} from './moduloservicotomado-grid/moduloservicotomado-grid.component'; 
import {ModuloServicoTomadoFormComponent} from './moduloservicotomado-form/moduloservicotomado-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ModuloServicoTomadoService} from './moduloservicotomado.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ModuloServicoTomadoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ModuloServicoTomadoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ModuloServicoTomadoGridComponent, 
                ModuloServicoTomadoFormComponent, 
                ], 
                entryComponents: [ModuloServicoTomadoGridComponent,ModuloServicoTomadoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ModuloServicoTomadoModule {} 
