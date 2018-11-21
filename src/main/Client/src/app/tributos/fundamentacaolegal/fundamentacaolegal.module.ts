import { RouterModule } from '@angular/router'; 
 
import {FundamentacaoLegalGridComponent} from './fundamentacaolegal-grid/fundamentacaolegal-grid.component'; 
import {FundamentacaoLegalFormComponent} from './fundamentacaolegal-form/fundamentacaolegal-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {FundamentacaoLegalService} from './fundamentacaolegal.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: FundamentacaoLegalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: FundamentacaoLegalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                FundamentacaoLegalGridComponent, 
                FundamentacaoLegalFormComponent, 
                ], 
                entryComponents: [FundamentacaoLegalGridComponent,FundamentacaoLegalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class FundamentacaoLegalModule {} 
