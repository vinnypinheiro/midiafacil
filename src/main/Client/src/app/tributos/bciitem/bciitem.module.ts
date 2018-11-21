import { RouterModule } from '@angular/router'; 
 
import {BciItemGridComponent} from './bciitem-grid/bciitem-grid.component'; 
import {BciItemFormComponent} from './bciitem-form/bciitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BciItemService} from './bciitem.service'; 
import {SharedModule} from '../../shared/shared.module';
import {BciitemItemFormComponent} from "./bciitem-item-form/bciitem-item-form.component";
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BciItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BciItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BciItemGridComponent, 
                BciItemFormComponent
                ], 
                entryComponents: [BciItemGridComponent,BciItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BciItemModule {} 
