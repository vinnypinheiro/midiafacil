import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonsForm} from "../../../commons-form";
import {Veiculo} from "../../veiculo/veiculo";
import {VeiculoService} from "../../veiculo/veiculo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Operation} from "../../../utils/utils";
import {FilterData} from "../../../components/interfaces";
import {CommonsService} from "../../../commons-service";
import {fuseAnimations} from "../../../../@fuse/animations";
import {DialogPecaForm} from "../../planomidia/planomidia-view/planomidia-view.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Peca} from "../../peca/peca";
import {FormArray, FormBuilder} from "@angular/forms";
import {PecaService} from "../../peca/peca.service";
import {Programa} from "../../programa/programa";
import {ProgramaService} from "../../programa/programa.service";

@Component({
  selector: 'app-veiculo-view',
  templateUrl: './veiculo-view.component.html',
  styleUrls: ['./veiculo-view.component.scss'],
    animations   : fuseAnimations
})
export class VeiculoViewComponent  extends CommonsForm<Veiculo> implements OnInit {

    entity: any;

    constructor(
        public dialog: MatDialog,
        apiService: VeiculoService,
        route: ActivatedRoute,
        router: Router ) {

        super(apiService, route, router);
    }


    ngOnInit (){

        this.beanSubscribe = this.route.params.subscribe(params => {
            this.beanId = params['id'];
            if (this.beanId === "novo") {
                this.beanId = "";
                this.operation = Operation.CREATE;
            } else {
                this.operation = Operation.SELECT;
                this.apiService.findById(this.beanId).subscribe(response => {
                    this.activeBean = (<any>response);
                    this.entity = this.activeBean;
                    console.log(this.activeBean)


                });
            }
        });

    }

    getDeLookupFilter(lookupValue: any): FilterData {
        switch (lookupValue.name) {
            case 'uf': {
                return this.buildLookupFilter('uf');
            }

            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name)
            }
        }
        return null;
    }

    openDialog(entity): void {
        const dialogRef = this.dialog.open(DialogProgramaForm, {

            data:{
                entidade: this.entity

            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);

        });

    }



    getLookupService(lookupName: string): CommonsService<any> {
        switch (lookupName) {
            case 'uf': {
            }

            default: {
                console.log('serviço não disponibilizado para ', lookupName)
                return this.apiService;
            }
        }
    }

    printAccount(elementID): void {
        let printContents, popupWin;
        printContents = document.getElementById( elementID).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
        );
        popupWin.document.close();
    }

}


@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './adicionar-programa.html',
    encapsulation: ViewEncapsulation.None,
})
export class DialogProgramaForm {

    programa: Programa;

    constructor(
        public dialogRef: MatDialogRef<DialogProgramaForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private programaService: ProgramaService,
    ) {

    }

    savePrograma(){
        this.activeForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.programaService.save(this.activeForm.value).subscribe(response => {
            console.log(response);

        });
    }

    //Cliente reactive form
    activeForm = this.fb.group({
        descricao:  [''],
        horario: [''],
        valor:  [''],
        veiculo_id: ['']
    });



    closeDialog(): void {
        this.dialogRef.close();
    }
}
