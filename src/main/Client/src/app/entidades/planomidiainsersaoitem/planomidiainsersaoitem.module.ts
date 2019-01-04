import { RouterModule } from '@angular/router'; 
 
import {PlanoMidiaInsersaoItemGridComponent} from './planomidiainsersaoitem-grid/planomidiainsersaoitem-grid.component'; 
import {PlanoMidiaInsersaoItemFormComponent} from './planomidiainsersaoitem-form/planomidiainsersaoitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PlanoMidiaInsersaoItemService} from './planomidiainsersaoitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PlanoMidiaInsersaoItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PlanoMidiaInsersaoItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PlanoMidiaInsersaoItemGridComponent, 
                PlanoMidiaInsersaoItemFormComponent, 
                ], 
                entryComponents: [PlanoMidiaInsersaoItemGridComponent,PlanoMidiaInsersaoItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PlanoMidiaInsersaoItemModule {} 
