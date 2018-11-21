import { RouterModule } from '@angular/router'; 
 
import {LocalConcessaoBoxGridComponent} from './localconcessaobox-grid/localconcessaobox-grid.component'; 
import {LocalConcessaoBoxFormComponent} from './localconcessaobox-form/localconcessaobox-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {LocalConcessaoBoxService} from './localconcessaobox.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: LocalConcessaoBoxGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: LocalConcessaoBoxFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                LocalConcessaoBoxGridComponent, 
                LocalConcessaoBoxFormComponent, 
                ], 
                entryComponents: [LocalConcessaoBoxGridComponent,LocalConcessaoBoxFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class LocalConcessaoBoxModule {} 
