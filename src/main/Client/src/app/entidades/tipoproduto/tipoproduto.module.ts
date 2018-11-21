import { RouterModule } from '@angular/router'; 
 
import {TipoProdutoGridComponent} from './tipoproduto-grid/tipoproduto-grid.component'; 
import {TipoProdutoFormComponent} from './tipoproduto-form/tipoproduto-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoProdutoService} from './tipoproduto.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoProdutoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoProdutoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoProdutoGridComponent, 
                TipoProdutoFormComponent, 
                ], 
                entryComponents: [TipoProdutoGridComponent,TipoProdutoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoProdutoModule {} 
