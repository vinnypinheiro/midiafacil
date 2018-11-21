import { RouterModule } from '@angular/router'; 
 
import {BaixaGridComponent} from './baixa-grid/baixa-grid.component'; 
import {BaixaFormComponent} from './baixa-form/baixa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BaixaService} from './baixa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BaixaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BaixaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BaixaGridComponent, 
                BaixaFormComponent, 
                ], 
                entryComponents: [BaixaGridComponent,BaixaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BaixaModule {} 
