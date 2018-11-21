import { RouterModule } from '@angular/router'; 
 
import {ProdutoGridComponent} from './produto-grid/produto-grid.component'; 
import {ProdutoFormComponent} from './produto-form/produto-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProdutoService} from './produto.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProdutoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProdutoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProdutoGridComponent, 
                ProdutoFormComponent, 
                ], 
                entryComponents: [ProdutoGridComponent,ProdutoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProdutoModule {} 
