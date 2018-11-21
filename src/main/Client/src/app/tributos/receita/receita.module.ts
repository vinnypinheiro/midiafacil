import { RouterModule } from '@angular/router'; 
 
import {ReceitaGridComponent} from './receita-grid/receita-grid.component'; 
import {ReceitaFormComponent} from './receita-form/receita-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ReceitaService} from './receita.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ReceitaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ReceitaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ReceitaGridComponent, 
                ReceitaFormComponent, 
                ], 
                entryComponents: [ReceitaGridComponent,ReceitaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ReceitaModule {} 
