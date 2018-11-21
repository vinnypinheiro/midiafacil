import { RouterModule } from '@angular/router'; 
 
import {BancoContratoGridComponent} from './bancocontrato-grid/bancocontrato-grid.component'; 
import {BancoContratoFormComponent} from './bancocontrato-form/bancocontrato-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BancoContratoService} from './bancocontrato.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BancoContratoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BancoContratoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BancoContratoGridComponent, 
                BancoContratoFormComponent, 
                ], 
                entryComponents: [BancoContratoGridComponent,BancoContratoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BancoContratoModule {} 
