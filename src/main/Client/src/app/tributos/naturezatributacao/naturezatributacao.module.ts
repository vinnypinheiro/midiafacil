import { RouterModule } from '@angular/router'; 
 
import {NaturezaTributacaoGridComponent} from './naturezatributacao-grid/naturezatributacao-grid.component'; 
import {NaturezaTributacaoFormComponent} from './naturezatributacao-form/naturezatributacao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {NaturezaTributacaoService} from './naturezatributacao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: NaturezaTributacaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: NaturezaTributacaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                NaturezaTributacaoGridComponent, 
                NaturezaTributacaoFormComponent, 
                ], 
                entryComponents: [NaturezaTributacaoGridComponent,NaturezaTributacaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class NaturezaTributacaoModule {} 
