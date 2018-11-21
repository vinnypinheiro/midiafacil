import { RouterModule } from '@angular/router'; 
 
import {ParcelamentoTributarioGridComponent} from './parcelamentotributario-grid/parcelamentotributario-grid.component'; 
import {ParcelamentoTributarioFormComponent} from './parcelamentotributario-form/parcelamentotributario-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ParcelamentoTributarioService} from './parcelamentotributario.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ParcelamentoTributarioGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ParcelamentoTributarioFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ParcelamentoTributarioGridComponent, 
                ParcelamentoTributarioFormComponent, 
                ], 
                entryComponents: [ParcelamentoTributarioGridComponent,ParcelamentoTributarioFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ParcelamentoTributarioModule {} 
