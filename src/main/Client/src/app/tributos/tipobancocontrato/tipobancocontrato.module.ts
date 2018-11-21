import { RouterModule } from '@angular/router'; 
 
import {TipoBancoContratoGridComponent} from './tipobancocontrato-grid/tipobancocontrato-grid.component'; 
import {TipoBancoContratoFormComponent} from './tipobancocontrato-form/tipobancocontrato-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoBancoContratoService} from './tipobancocontrato.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoBancoContratoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoBancoContratoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoBancoContratoGridComponent, 
                TipoBancoContratoFormComponent, 
                ], 
                entryComponents: [TipoBancoContratoGridComponent,TipoBancoContratoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoBancoContratoModule {} 
