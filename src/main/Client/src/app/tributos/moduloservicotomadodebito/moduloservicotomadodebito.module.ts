import { RouterModule } from '@angular/router'; 
 
import {ModuloServicoTomadoDebitoGridComponent} from './moduloservicotomadodebito-grid/moduloservicotomadodebito-grid.component'; 
import {ModuloServicoTomadoDebitoFormComponent} from './moduloservicotomadodebito-form/moduloservicotomadodebito-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ModuloServicoTomadoDebitoService} from './moduloservicotomadodebito.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ModuloServicoTomadoDebitoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ModuloServicoTomadoDebitoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ModuloServicoTomadoDebitoGridComponent, 
                ModuloServicoTomadoDebitoFormComponent, 
                ], 
                entryComponents: [ModuloServicoTomadoDebitoGridComponent,ModuloServicoTomadoDebitoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ModuloServicoTomadoDebitoModule {} 
