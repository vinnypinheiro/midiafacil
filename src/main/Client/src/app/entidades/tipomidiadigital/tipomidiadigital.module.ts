import { RouterModule } from '@angular/router'; 
 
import {TipoMidiaDigitalGridComponent} from './tipomidiadigital-grid/tipomidiadigital-grid.component'; 
import {TipoMidiaDigitalFormComponent} from './tipomidiadigital-form/tipomidiadigital-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoMidiaDigitalService} from './tipomidiadigital.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoMidiaDigitalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoMidiaDigitalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoMidiaDigitalGridComponent, 
                TipoMidiaDigitalFormComponent, 
                ], 
                entryComponents: [TipoMidiaDigitalGridComponent,TipoMidiaDigitalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoMidiaDigitalModule {} 
