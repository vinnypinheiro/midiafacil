import { RouterModule } from '@angular/router'; 
 
import {HistoricoSimplesNacionalGridComponent} from './historicosimplesnacional-grid/historicosimplesnacional-grid.component'; 
import {HistoricoSimplesNacionalFormComponent} from './historicosimplesnacional-form/historicosimplesnacional-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {HistoricoSimplesNacionalService} from './historicosimplesnacional.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: HistoricoSimplesNacionalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: HistoricoSimplesNacionalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                HistoricoSimplesNacionalGridComponent, 
                HistoricoSimplesNacionalFormComponent, 
                ], 
                entryComponents: [HistoricoSimplesNacionalGridComponent,HistoricoSimplesNacionalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class HistoricoSimplesNacionalModule {} 
