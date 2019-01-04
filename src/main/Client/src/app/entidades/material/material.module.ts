import { RouterModule } from '@angular/router'; 
 
import {MaterialGridComponent} from './material-grid/material-grid.component'; 
import {MaterialFormComponent} from './material-form/material-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";
import {
    MatButtonModule, MatCardModule,
    MatChipsModule, MatDatepickerModule, MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule, MatTableModule, MatTabsModule
} from "@angular/material";
import {FuseSharedModule} from "../../../@fuse/shared.module";
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: MaterialGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: MaterialFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule ,
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
                MaterialGridComponent, 
                MaterialFormComponent, 
                ], 
                entryComponents: [MaterialGridComponent,MaterialFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class MaterialModule {} 
