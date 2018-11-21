import { RouterModule } from '@angular/router'; 
 
import {TipoBaixaGridComponent} from './tipobaixa-grid/tipobaixa-grid.component'; 
import {TipoBaixaFormComponent} from './tipobaixa-form/tipobaixa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoBaixaService} from './tipobaixa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoBaixaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoBaixaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoBaixaGridComponent, 
                TipoBaixaFormComponent, 
                ], 
                entryComponents: [TipoBaixaGridComponent,TipoBaixaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoBaixaModule {} 
