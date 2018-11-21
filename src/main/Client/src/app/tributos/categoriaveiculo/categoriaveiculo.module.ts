import { RouterModule } from '@angular/router'; 
 
import {CategoriaVeiculoGridComponent} from './categoriaveiculo-grid/categoriaveiculo-grid.component'; 
import {CategoriaVeiculoFormComponent} from './categoriaveiculo-form/categoriaveiculo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CategoriaVeiculoService} from './categoriaveiculo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CategoriaVeiculoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CategoriaVeiculoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CategoriaVeiculoGridComponent, 
                CategoriaVeiculoFormComponent, 
                ], 
                entryComponents: [CategoriaVeiculoGridComponent,CategoriaVeiculoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CategoriaVeiculoModule {} 
