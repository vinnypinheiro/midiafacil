import { RouterModule } from '@angular/router'; 
 
import {NaturezaOperacaoEmpresaGridComponent} from './naturezaoperacaoempresa-grid/naturezaoperacaoempresa-grid.component'; 
import {NaturezaOperacaoEmpresaFormComponent} from './naturezaoperacaoempresa-form/naturezaoperacaoempresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {NaturezaOperacaoEmpresaService} from './naturezaoperacaoempresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: NaturezaOperacaoEmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: NaturezaOperacaoEmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                NaturezaOperacaoEmpresaGridComponent, 
                NaturezaOperacaoEmpresaFormComponent, 
                ], 
                entryComponents: [NaturezaOperacaoEmpresaGridComponent,NaturezaOperacaoEmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class NaturezaOperacaoEmpresaModule {} 
