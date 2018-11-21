import { RouterModule } from '@angular/router'; 
 
import {ParcelamentoTributarioItemGridComponent} from './parcelamentotributarioitem-grid/parcelamentotributarioitem-grid.component'; 
import {ParcelamentoTributarioItemFormComponent} from './parcelamentotributarioitem-form/parcelamentotributarioitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ParcelamentoTributarioItemService} from './parcelamentotributarioitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ParcelamentoTributarioItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ParcelamentoTributarioItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ParcelamentoTributarioItemGridComponent, 
                ParcelamentoTributarioItemFormComponent, 
                ], 
                entryComponents: [ParcelamentoTributarioItemGridComponent,ParcelamentoTributarioItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ParcelamentoTributarioItemModule {} 
