import { RouterModule } from '@angular/router'; 
 
import {MoedaCotacaoGridComponent} from './moedacotacao-grid/moedacotacao-grid.component'; 
import {MoedaCotacaoFormComponent} from './moedacotacao-form/moedacotacao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {MoedaCotacaoService} from './moedacotacao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: MoedaCotacaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: MoedaCotacaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                MoedaCotacaoGridComponent, 
                MoedaCotacaoFormComponent, 
                ], 
                entryComponents: [MoedaCotacaoGridComponent,MoedaCotacaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class MoedaCotacaoModule {} 
