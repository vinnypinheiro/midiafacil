import { RouterModule } from '@angular/router'; 
 
import {AlvaraVigilanciaSanitariaGridComponent} from './alvaravigilanciasanitaria-grid/alvaravigilanciasanitaria-grid.component'; 
import {AlvaraVigilanciaSanitariaFormComponent} from './alvaravigilanciasanitaria-form/alvaravigilanciasanitaria-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {AlvaraVigilanciaSanitariaService} from './alvaravigilanciasanitaria.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: AlvaraVigilanciaSanitariaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: AlvaraVigilanciaSanitariaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                AlvaraVigilanciaSanitariaGridComponent, 
                AlvaraVigilanciaSanitariaFormComponent, 
                ], 
                entryComponents: [AlvaraVigilanciaSanitariaGridComponent,AlvaraVigilanciaSanitariaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class AlvaraVigilanciaSanitariaModule {} 
