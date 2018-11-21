import { RouterModule } from '@angular/router'; 
 
import {ParcelamentoTributarioDebitoGridComponent} from './parcelamentotributariodebito-grid/parcelamentotributariodebito-grid.component'; 
import {ParcelamentoTributarioDebitoFormComponent} from './parcelamentotributariodebito-form/parcelamentotributariodebito-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ParcelamentoTributarioDebitoService} from './parcelamentotributariodebito.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ParcelamentoTributarioDebitoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ParcelamentoTributarioDebitoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ParcelamentoTributarioDebitoGridComponent, 
                ParcelamentoTributarioDebitoFormComponent, 
                ], 
                entryComponents: [ParcelamentoTributarioDebitoGridComponent,ParcelamentoTributarioDebitoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ParcelamentoTributarioDebitoModule {} 
