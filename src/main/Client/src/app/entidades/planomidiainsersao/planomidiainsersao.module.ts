import { RouterModule } from '@angular/router'; 
 
import {PlanoMidiaInsersaoGridComponent} from './planomidiainsersao-grid/planomidiainsersao-grid.component'; 
import {PlanoMidiaInsersaoFormComponent} from './planomidiainsersao-form/planomidiainsersao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PlanoMidiaInsersaoService} from './planomidiainsersao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PlanoMidiaInsersaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PlanoMidiaInsersaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PlanoMidiaInsersaoGridComponent, 
                PlanoMidiaInsersaoFormComponent, 
                ], 
                entryComponents: [PlanoMidiaInsersaoGridComponent,PlanoMidiaInsersaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PlanoMidiaInsersaoModule {} 
