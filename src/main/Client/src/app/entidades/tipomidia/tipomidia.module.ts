import { RouterModule } from '@angular/router'; 
 
import {TipoMidiaGridComponent} from './tipomidia-grid/tipomidia-grid.component'; 
import {TipoMidiaFormComponent} from './tipomidia-form/tipomidia-form.component'; 
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
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoMidiaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoMidiaFormComponent, 
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
                TipoMidiaGridComponent, 
                TipoMidiaFormComponent, 
                ], 
                entryComponents: [TipoMidiaGridComponent,TipoMidiaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoMidiaModule {} 
