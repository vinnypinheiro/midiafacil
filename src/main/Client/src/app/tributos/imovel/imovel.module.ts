import { RouterModule } from '@angular/router'; 
 
import {ImovelGridComponent} from './imovel-grid/imovel-grid.component'; 
import {ImovelFormComponent} from './imovel-form/imovel-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {BciitemItemFormComponent} from "../bciitem/bciitem-item-form/bciitem-item-form.component";
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ImovelGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ImovelFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ImovelGridComponent, 
                ImovelFormComponent,
                BciitemItemFormComponent
                ], 
                entryComponents: [ImovelGridComponent,ImovelFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ImovelModule {} 
