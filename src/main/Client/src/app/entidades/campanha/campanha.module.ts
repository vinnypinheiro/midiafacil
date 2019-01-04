import { RouterModule } from '@angular/router'; 
 
import {CampanhaGridComponent} from './campanha-grid/campanha-grid.component'; 
import {CampanhaFormComponent} from './campanha-form/campanha-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';


import {
    MatButtonModule, MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule

} from '@angular/material';
import {ReactiveFormsModule} from "@angular/forms";
import {FuseSharedModule} from "../../../@fuse/shared.module";
import {CampanhaViewComponent} from "./campanha-view/campanha-view.component";

 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CampanhaGridComponent, 
                canActivate: [AuthGuard] 
        },
    {
        path: 'new',
        component: CampanhaFormComponent,
        canActivate: [AuthGuard]
    },
        { 
            path: ':id', 
                    component: CampanhaFormComponent, 
                canActivate: [AuthGuard] 
        },
    {
        path: 'view/:id',
        component: CampanhaViewComponent,
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
                    MatDialogModule,
                    MatCardModule,
                    MatDatepickerModule,

                    FuseSharedModule,

                ], 
                declarations: [ 
                CampanhaGridComponent, 
                CampanhaFormComponent,
                    CampanhaViewComponent
                ], 
                entryComponents: [CampanhaGridComponent,CampanhaFormComponent, CampanhaViewComponent],
                schemas: [], 
                providers: [] 
                }) 
        export class CampanhaModule {} 
