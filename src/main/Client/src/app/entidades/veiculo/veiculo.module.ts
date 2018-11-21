import { RouterModule } from '@angular/router'; 
 
import {VeiculoGridComponent} from './veiculo-grid/veiculo-grid.component'; 
import {VeiculoFormComponent} from './veiculo-form/veiculo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {VeiculoService} from './veiculo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: VeiculoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: VeiculoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                VeiculoGridComponent, 
                VeiculoFormComponent, 
                ], 
                entryComponents: [VeiculoGridComponent,VeiculoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class VeiculoModule {} 
