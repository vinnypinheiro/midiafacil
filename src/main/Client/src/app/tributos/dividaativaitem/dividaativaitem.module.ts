import { RouterModule } from '@angular/router'; 
 
import {DividaAtivaItemGridComponent} from './dividaativaitem-grid/dividaativaitem-grid.component'; 
import {DividaAtivaItemFormComponent} from './dividaativaitem-form/dividaativaitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {DividaAtivaItemService} from './dividaativaitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: DividaAtivaItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: DividaAtivaItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                DividaAtivaItemGridComponent, 
                DividaAtivaItemFormComponent, 
                ], 
                entryComponents: [DividaAtivaItemGridComponent,DividaAtivaItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class DividaAtivaItemModule {} 
