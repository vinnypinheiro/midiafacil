import { RouterModule } from '@angular/router'; 
 
import {TipoDividaAtivaGridComponent} from './tipodividaativa-grid/tipodividaativa-grid.component'; 
import {TipoDividaAtivaFormComponent} from './tipodividaativa-form/tipodividaativa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoDividaAtivaService} from './tipodividaativa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoDividaAtivaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoDividaAtivaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoDividaAtivaGridComponent, 
                TipoDividaAtivaFormComponent, 
                ], 
                entryComponents: [TipoDividaAtivaGridComponent,TipoDividaAtivaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoDividaAtivaModule {} 
