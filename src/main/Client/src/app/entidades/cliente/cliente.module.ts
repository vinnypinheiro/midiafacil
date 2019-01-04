import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';

import {
     MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSnackBarModule,
        MatSortModule,
        MatTableModule, MatTabsModule
    } from '@angular/material';
 
import {ClienteGridComponent} from './cliente-grid/cliente-grid.component'; 
import {ClienteFormComponent} from './cliente-form/cliente-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module'; 

import { FuseSharedModule } from '@fuse/shared.module';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';

 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ClienteGridComponent, 
                canActivate: [AuthGuard] 
        },
    {
        path: 'new',
        component: ClienteFormComponent,
        canActivate: [AuthGuard]
    },
    {
            path: 'view/:id',
                    component: ClienteViewComponent,
                canActivate: [AuthGuard] 
        },
    {
        path: 'edit/:id',
        component: ClienteFormComponent,
        canActivate: [AuthGuard]
    }];
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule,
                ReactiveFormsModule,
                MatButtonModule,
                MatChipsModule,
                MatExpansionModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatPaginatorModule,
                MatRippleModule,
                MatSelectModule,
                MatSortModule,
                MatSnackBarModule,
                MatTableModule,
                MatTabsModule,

                FuseSharedModule

                ], 
                declarations: [  
                ClienteGridComponent, 
                ClienteFormComponent,
                    ClienteViewComponent,
                ], 
                entryComponents: [ClienteGridComponent,ClienteFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ClienteModule {} 
