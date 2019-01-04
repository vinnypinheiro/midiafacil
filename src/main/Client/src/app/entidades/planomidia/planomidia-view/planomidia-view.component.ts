import {Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import {Operation} from "../../../utils/utils";
import {CommonsService} from "../../../commons-service";
import {CommonsForm} from "../../../commons-form";
import {ActivatedRoute, Router} from "@angular/router";
import {FilterData} from "../../../components/interfaces";
import {PlanoMidia} from "../planomidia";
import {PlanoMidiaService} from "../planomidia.service";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {TipoMidiaService} from "../../tipomidia/tipomidia.service";
import {TipoMidia} from "../../tipomidia/tipomidia";
import {Peca} from "../../peca/peca";
import {PecaService} from "../../peca/peca.service";
import {Veiculo} from "../../veiculo/veiculo";
import {Programa} from "../../programa/programa";
import {PedidoInsercaoItemService} from "../../pedidoinsercaoitem/pedidoinsercaoitem.service";
import {VeiculoService} from "../../veiculo/veiculo.service";
import {SharedService} from "../../../shared/shared.service";
import {ProdutoService} from "../../produto/produto.service";
import {Produto} from "../../produto/produto";
import {PedidoInsercaoItem} from "../../pedidoinsercaoitem/pedidoinsercaoitem";

import {Location} from '@angular/common';


@Component({
  selector: 'app-planomidia-view',
  templateUrl: './planomidia-view.component.html',
  styleUrls: ['./planomidia-view.component.scss'],
    animations   : fuseAnimations
})
export class PlanomidiaViewComponent extends CommonsForm<PlanoMidia> implements OnInit {

    entity: any;
    tipoMidia: TipoMidia[] = [];
    veiculoList: Veiculo [] = [];
    produtoList: Produto[] = [];

    constructor(private _location: Location,
                public dialog: MatDialog,
                private produtoService: ProdutoService,
                private tipoMidiaService: TipoMidiaService,
                private veiculoService: VeiculoService,
                private fb: FormBuilder,
        private sharedService: SharedService,
        apiService: PlanoMidiaService,
        route: ActivatedRoute,
        router: Router ) {

        super(apiService, route, router);
    }

  ngOnInit() {

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

      this.tipoMidiaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
          this.tipoMidia = response.content;

          this.veiculoService.loadByFilter(this.getDefaultFilter()).subscribe( response =>{
              this.veiculoList = response.content;
          });

      });

      this.produtoService.loadByFilter(this.getDefaultFilter()).subscribe( response =>{
          this.produtoList = response.content;
      });

      this.setPecaArray();

  }

    backClicked() {
        this._location.back();
    }

  duplicarGrade(pedidoInsercaoItem){

        this.openGradeDialogDuplicado(pedidoInsercaoItem);
    }

    openDialog(entity): void {
        const dialogRef = this.dialog.open(DialogPecaForm, {

            data:{
                tipoMidiaList:  this.tipoMidia,
                produtoList: this.produtoList,
                entidade: this.entity

            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.setPecaArray();
        });

    }

    openGradeDialogDuplicado(pedidoInsercaoItem): void {
        const dialogRef = this.dialog.open(DialogGradeForm, {

            data:{
                veiculoList:   this.veiculoList,
                entidade: this.entity,
                edit: false,
                pedidoitem: pedidoInsercaoItem

            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.setGradeArray();
        });

    }

    openGradeDialog(entity): void {
        const dialogRef = this.dialog.open(DialogGradeForm, {

            data:{
                veiculoList:   this.veiculoList,
                entidade: this.entity

            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.setGradeArray();
        });

    }

    DialogGradeSiteForm(entity): void {
        const dialogRef = this.dialog.open(DialogGradeSiteForm, {
            width: '900px',
            data:{
                veiculoList:   this.veiculoList,
                entidade: this.entity

            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.setGradeArray();
        });

    }


    openGradeDialogEdit(pedidoInsercaoItem): void {
        const dialogRef = this.dialog.open(DialogGradeForm, {

            data:{
                veiculoList:   this.veiculoList,
                entidade: this.entity,
                edit: true,
                pedidoInsercaoItem: pedidoInsercaoItem

            },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.setGradeArray();
        });

    }

    setGradeArray(){

        this.operation = Operation.SELECT;
        this.apiService.findById(this.beanId).subscribe(response => {
            this.activeBean = (<any>response);
            this.entity = this.activeBean;
            console.log(this.activeBean);

            let control = <FormArray>this.activeForm.controls.pedidoDeInsercaoItemlist;
            this.entity.pedidoDeInsercaoItemlist.forEach(p => {
                control.push(this.fb.group({

                    peca: p.peca,
                    data:  p.data,
                    mes:  p.mes,
                    ano:  p.ano,
                    desconto:  p.desconto,
                    dia01:  p.dia01,
                    dia02:  p.dia02,
                    dia03:  p.dia03,
                    dia04:  p.dia04,
                    dia05:  p.dia05,
                    dia06:  p.dia06,
                    dia07:  p.dia07,
                    dia08:  p.dia08,
                    dia09:  p.dia09,
                    dia10:  p.dia10,
                    dia11:  p.dia11,
                    dia12:  p.dia12,
                    dia13:  p.dia13,
                    dia14:  p.dia14,
                    dia15:  p.dia15,
                    dia16:  p.dia16,
                    dia17:  p.dia17,
                    dia18:  p.dia18,
                    dia19:  p.dia19,
                    dia20:  p.dia20,
                    dia21:  p.dia21,
                    dia22:  p.dia22,
                    dia23:  p.dia23,
                    dia24:  p.dia24,
                    dia25:  p.dia25,
                    dia26:  p.dia26,
                    dia27:  p.dia27,
                    dia28:  p.dia28,
                    dia29:  p.dia29,
                    dia30:  p.dia30,
                    dia31:  p.dia31,
                    obs: p.obs,
                    qtd:  p.qtd,
                    valor:  p.valor,
                    valorUnit:  p.valorUnit,
                    vencimento: p.vencimento,
                    planomidia_id :  p.planomidia_id,
                    veiculo_id :  p.veiculo_id,
                    peca_id :  p.peca_id,
                    programa_id :  p.programa_id,
                }))
            });


        });



    }

    openDeletDialog(pedidoInsercaoItem): void {
        const dialogRef = this.dialog.open(DeleteGradeDialog, {
            width: '250px',
            data: {
                pedidoitem: pedidoInsercaoItem
            }

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.setGradeArray();
        });
    }




    //Plano Midia reactive form
    activeForm = this.fb.group({
        id: null,
        obs:  null,
        data: null,
        agencia_id: null,
        cliente_id:  null,
        situacao: null,

        pecalist: this.fb.array([this.addPecaListGroup()]),
        pedidoDeInsercaoItemlist: this.fb.array([this.addpedidoDeInsercaoItemlistGroup()])

    });

    addPecaListGroup() {
        return this.fb.group({
            peca:  [null],
            titulo:  [null],
            duracap: [null],
            planomidia_id:  [null],
            tipomidia_id: [null],

        });
    }

    setPecaArray(){

        this.operation = Operation.SELECT;
        this.apiService.findById(this.beanId).subscribe(response => {
            this.activeBean = (<any>response);
            this.entity = this.activeBean;
            console.log(this.activeBean);

            let control = <FormArray>this.activeForm.controls.pecalist;
            this.entity.pecalist.forEach(x => {
                control.push(this.fb.group({
                    peca: x.peca,
                    titulo: x.titulo,
                    duracao: x.duracao
                }))
            });


        });



    }
    reportname: string;
    printReport( id: number) {

        if(this.activeBean.tipo == "RADIO"){
            this.reportname = "PlanoDeMidiaRadios"
        } else {
            this.reportname = "PlanoDeMidiaSites"
        }

        this.sharedService.printReport( this.reportname, id)
    }



    addpedidoDeInsercaoItemlistGroup() {
        return this.fb.group({
            data:  [null],
            mes:  [null],
            ano:  [null],
            desconto:  [null],
            dia01:  [null],
            dia02:  [null],
            dia03:  [null],
            dia04:  [null],
            dia05:  [null],
            dia06:  [null],
            dia07:  [null],
            dia08:  [null],
            dia09:  [null],
            dia10:  [null],
            dia11:  [null],
            dia12:  [null],
            dia13:  [null],
            dia14:  [null],
            dia15:  [null],
            dia16:  [null],
            dia17:  [null],
            dia18:  [null],
            dia19:  [null],
            dia20:  [null],
            dia21:  [null],
            dia22:  [null],
            dia23:  [null],
            dia24:  [null],
            dia25:  [null],
            dia26:  [null],
            dia27:  [null],
            dia28:  [null],
            dia29:  [null],
            dia30:  [null],
            dia31:  [null],
            obs: [null],
            qtd:  [null],
            valor:  [null],
            valorUnit:  [null],
            vencimento: [null],
            planomidia_id :  [null],
            veiculo_id :  [null],
            peca_id :  [null],
            programa_id :  [null],

        });
    }

    getDeLookupFilter(lookupValue: any): FilterData {
        switch (lookupValue.name) {


            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name)
            }
        }
        return null;
    }

    getLookupService(lookupName: string): CommonsService<any> {
        switch (lookupName) {


            default: {
                console.log('serviço não disponibilizado para ', lookupName)
                return this.apiService;
            }
        }
    }


}

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './adicionar-peca.html',
})
export class DialogPecaForm {

    peca: Peca;

    constructor(
        public dialogRef: MatDialogRef<DialogPecaForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
         private fb: FormBuilder,
        private pecaService: PecaService
    ) {

    }

    savePeca(){
        this.pecaForm.patchValue(
            {
                planomidia_id: this.data.entidade,
            }
        );

        this.pecaService.save(this.pecaForm.value).subscribe(response => {
            console.log(response);

        });
    }

    //Cliente reactive form
    pecaForm = this.fb.group({
        peca: [''],
        titulo:  [''],
        produto_id: [''],
        duracao:  [''],
        planomidia_id: ['']
    });



    closeDialog(): void {
        this.dialogRef.close();
    }
}




@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './adicionar-grade-site.html',
    encapsulation: ViewEncapsulation.None,
})
export class DialogGradeSiteForm implements OnInit {

    pecas: Peca[];
    veiculos: Veiculo[];
    planoMidia: PlanoMidia;
    programaList: Programa[];

    pedidoItemLocal: PedidoInsercaoItem;


    constructor(
        public dialogRef: MatDialogRef<DialogGradeForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private pecaService: PecaService,
        private pedidoInsercaoItemService: PedidoInsercaoItemService
    ) {

    }

    ngOnInit(){
        this.veiculos = this.data.veiculoList;
        this.veiculoFilter = this.data.veiculoList;
        this.planoMidia = this.data.entidade;
        this.pecas = this.planoMidia.pecalist;

        if( this.data.edit == true){

            this.pedidoItemLocal = this.data.pedidoInsercaoItem;
            console.log(this.pedidoItemLocal);

            this.gradeForm.patchValue(
                {
                    data: this.pedidoItemLocal.data,
                    mes: this.pedidoItemLocal.mes,
                    ano: this.pedidoItemLocal.ano,
                    desconto: 0,
                    dia01: this.pedidoItemLocal.dia01,
                    dia02: this.pedidoItemLocal.dia02,
                    dia03: this.pedidoItemLocal.dia03,
                    dia04: this.pedidoItemLocal.dia04,
                    dia05: this.pedidoItemLocal.dia05,
                    dia06: this.pedidoItemLocal.dia06,
                    dia07: this.pedidoItemLocal.dia07,
                    dia08: this.pedidoItemLocal.dia08,
                    dia09: this.pedidoItemLocal.dia09,
                    dia10: this.pedidoItemLocal.dia10,
                    dia11: this.pedidoItemLocal.dia11,
                    dia12: this.pedidoItemLocal.dia12,
                    dia13: this.pedidoItemLocal.dia13,
                    dia14: this.pedidoItemLocal.dia14,
                    dia15: this.pedidoItemLocal.dia15,
                    dia16: this.pedidoItemLocal.dia16,
                    dia17: this.pedidoItemLocal.dia17,
                    dia18: this.pedidoItemLocal.dia18,
                    dia19: this.pedidoItemLocal.dia19,
                    dia20: this.pedidoItemLocal.dia20,
                    dia21: this.pedidoItemLocal.dia21,
                    dia22: this.pedidoItemLocal.dia22,
                    dia23: this.pedidoItemLocal.dia23,
                    dia24: this.pedidoItemLocal.dia24,
                    dia25: this.pedidoItemLocal.dia25,
                    dia26: this.pedidoItemLocal.dia26,
                    dia27: this.pedidoItemLocal.dia27,
                    dia28: this.pedidoItemLocal.dia28,
                    dia29: this.pedidoItemLocal.dia29,
                    dia30: this.pedidoItemLocal.dia30,
                    dia31: this.pedidoItemLocal.dia31,
                    qtd: this.pedidoItemLocal.qtd,
                    veiculo_id :  null,
                    peca_id :  this.pedidoItemLocal.peca_id.peca,
                    programa_id :   null,
                }
            );

        }

       if(this.data.edit == false){
           this.pedidoItemLocal = this.data.pedidoitem;
           console.log(this.pedidoItemLocal);

           this.gradeForm.patchValue(
               {
                   data: this.pedidoItemLocal.data,
                   mes: this.pedidoItemLocal.mes,
                   ano: this.pedidoItemLocal.ano,
                   desconto: 0,
                   dia01: this.pedidoItemLocal.dia01,
                   dia02: this.pedidoItemLocal.dia02,
                   dia03: this.pedidoItemLocal.dia03,
                   dia04: this.pedidoItemLocal.dia04,
                   dia05: this.pedidoItemLocal.dia05,
                   dia06: this.pedidoItemLocal.dia06,
                   dia07: this.pedidoItemLocal.dia07,
                   dia08: this.pedidoItemLocal.dia08,
                   dia09: this.pedidoItemLocal.dia09,
                   dia10: this.pedidoItemLocal.dia10,
                   dia11: this.pedidoItemLocal.dia11,
                   dia12: this.pedidoItemLocal.dia12,
                   dia13: this.pedidoItemLocal.dia13,
                   dia14: this.pedidoItemLocal.dia14,
                   dia15: this.pedidoItemLocal.dia15,
                   dia16: this.pedidoItemLocal.dia16,
                   dia17: this.pedidoItemLocal.dia17,
                   dia18: this.pedidoItemLocal.dia18,
                   dia19: this.pedidoItemLocal.dia19,
                   dia20: this.pedidoItemLocal.dia20,
                   dia21: this.pedidoItemLocal.dia21,
                   dia22: this.pedidoItemLocal.dia22,
                   dia23: this.pedidoItemLocal.dia23,
                   dia24: this.pedidoItemLocal.dia24,
                   dia25: this.pedidoItemLocal.dia25,
                   dia26: this.pedidoItemLocal.dia26,
                   dia27: this.pedidoItemLocal.dia27,
                   dia28: this.pedidoItemLocal.dia28,
                   dia29: this.pedidoItemLocal.dia29,
                   dia30: this.pedidoItemLocal.dia30,
                   dia31: this.pedidoItemLocal.dia31,
                   qtd: this.pedidoItemLocal.qtd,

               }
           );

       }


    }

    veiculoFilter: Veiculo [];

    filterListCareUnit(val) {
        this.veiculoFilter = this.veiculos;

        console.log(val);
        this.veiculoFilter = this.veiculoFilter.filter((unit) => unit.nomefantasia.indexOf(val) > -1);
    }

    attVeiculos(){
        this.veiculoFilter = this.veiculos;
    }

    saveGrade(){
        this.gradeForm.patchValue(
            {
                planomidia_id: this.data.entidade,
            }
        );

        this.pedidoInsercaoItemService.save(this.gradeForm.value).subscribe(response => {
            console.log(response);

        });
    }

    setProgramaList(event){
        this.programaList = event.value.programalist;
    }


    setUnitPrice(event): void {
        this.gradeForm.patchValue(
            {
                valorUnit: event.value.valor,
                valor: event.value.valor
            }
        );
    }

    qtdPorInsercao(event){
        let qtd = event.target.value;

        for (var _i = 0; _i <= 0; _i++) {

            console.log(qtd);
            qtd--;
        }


    }

    qtdTotal: number;

    setTotalPrice(): void {

        this.qtdTotal =
            parseInt(this.gradeForm.controls.dia01.value) +
            parseInt(this.gradeForm.controls.dia02.value) +
            parseInt(this.gradeForm.controls.dia03.value) +
            parseInt(this.gradeForm.controls.dia04.value) +
            parseInt(this.gradeForm.controls.dia05.value) +
            parseInt(this.gradeForm.controls.dia06.value) +
            parseInt(this.gradeForm.controls.dia07.value) +
            parseInt(this.gradeForm.controls.dia08.value) +
            parseInt(this.gradeForm.controls.dia09.value) +
            parseInt(this.gradeForm.controls.dia10.value) +
            parseInt(this.gradeForm.controls.dia11.value) +
            parseInt(this.gradeForm.controls.dia12.value) +
            parseInt(this.gradeForm.controls.dia13.value) +
            parseInt(this.gradeForm.controls.dia14.value) +
            parseInt(this.gradeForm.controls.dia15.value) +
            parseInt(this.gradeForm.controls.dia16.value) +
            parseInt(this.gradeForm.controls.dia17.value) +
            parseInt(this.gradeForm.controls.dia18.value) +
            parseInt(this.gradeForm.controls.dia19.value) +
            parseInt(this.gradeForm.controls.dia20.value) +
            parseInt(this.gradeForm.controls.dia21.value) +
            parseInt(this.gradeForm.controls.dia22.value) +
            parseInt(this.gradeForm.controls.dia23.value) +
            parseInt(this.gradeForm.controls.dia24.value) +
            parseInt(this.gradeForm.controls.dia25.value) +
            parseInt(this.gradeForm.controls.dia26.value) +
            parseInt(this.gradeForm.controls.dia27.value) +
            parseInt(this.gradeForm.controls.dia28.value) +
            parseInt(this.gradeForm.controls.dia29.value) +
            parseInt(this.gradeForm.controls.dia30.value) +
            parseInt(this.gradeForm.controls.dia31.value)

            this.gradeForm.patchValue(

            {
                qtd: this.qtdTotal,
                valor:  this.gradeForm.controls.valorUnit.value * this.qtdTotal,
            }
        );


    }

    //Cliente reactive form
    gradeForm = this.fb.group({

        data: [''],
        mes: [''],
        ano: [''],
        desconto: 0,
        dia01: 0,
        dia02: 0,
        dia03: 0,
        dia04: 0,
        dia05: 0,
        dia06: 0,
        dia07: 0,
        dia08: 0,
        dia09: 0,
        dia10: 0,
        dia11: 0,
        dia12: 0,
        dia13: 0,
        dia14: 0,
        dia15: 0,
        dia16: 0,
        dia17: 0,
        dia18: 0,
        dia19: 0,
        dia20: 0,
        dia21: 0,
        dia22: 0,
        dia23: 0,
        dia24: 0,
        dia25: 0,
        dia26: 0,
        dia27: 0,
        dia28: 0,
        dia29: 0,
        dia30: 0,
        dia31: 0,
        faturamento: [''],
        obs: [''],
        qtd: 1,
        valor:0,
        valorUnit: 0,
        vencimento: [''],
        pedidoinsercao_id :  null,
        pedidoinsercao_id_nome :  null,
        pedidoinsercao_id_codigo :  null,
        planomidia_id :   null,
        veiculo_id :  null,
        peca_id :  null,
        programa_id :   null,


    });

    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './adicionar-grade.html',
    encapsulation: ViewEncapsulation.None,
})
export class DialogGradeForm implements OnInit {

    pecas: Peca[];
    veiculos: Veiculo[];
    planoMidia: PlanoMidia;
    programaList: Programa[];

    pedidoItemLocal: PedidoInsercaoItem;


    constructor(
        public dialogRef: MatDialogRef<DialogGradeForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private pecaService: PecaService,
        private pedidoInsercaoItemService: PedidoInsercaoItemService
    ) {

    }

    ngOnInit(){
        this.veiculos = this.data.veiculoList;
        this.planoMidia = this.data.entidade;
        this.pecas = this.planoMidia.pecalist;

        if( this.data.edit == true){

            this.pedidoItemLocal = this.data.pedidoInsercaoItem;
            console.log(this.pedidoItemLocal);

            this.gradeForm.patchValue(
                {
                    data: this.pedidoItemLocal.data,
                    mes: this.pedidoItemLocal.mes,
                    ano: this.pedidoItemLocal.ano,
                    desconto: 0,
                    dia01: this.pedidoItemLocal.dia01,
                    dia02: this.pedidoItemLocal.dia02,
                    dia03: this.pedidoItemLocal.dia03,
                    dia04: this.pedidoItemLocal.dia04,
                    dia05: this.pedidoItemLocal.dia05,
                    dia06: this.pedidoItemLocal.dia06,
                    dia07: this.pedidoItemLocal.dia07,
                    dia08: this.pedidoItemLocal.dia08,
                    dia09: this.pedidoItemLocal.dia09,
                    dia10: this.pedidoItemLocal.dia10,
                    dia11: this.pedidoItemLocal.dia11,
                    dia12: this.pedidoItemLocal.dia12,
                    dia13: this.pedidoItemLocal.dia13,
                    dia14: this.pedidoItemLocal.dia14,
                    dia15: this.pedidoItemLocal.dia15,
                    dia16: this.pedidoItemLocal.dia16,
                    dia17: this.pedidoItemLocal.dia17,
                    dia18: this.pedidoItemLocal.dia18,
                    dia19: this.pedidoItemLocal.dia19,
                    dia20: this.pedidoItemLocal.dia20,
                    dia21: this.pedidoItemLocal.dia21,
                    dia22: this.pedidoItemLocal.dia22,
                    dia23: this.pedidoItemLocal.dia23,
                    dia24: this.pedidoItemLocal.dia24,
                    dia25: this.pedidoItemLocal.dia25,
                    dia26: this.pedidoItemLocal.dia26,
                    dia27: this.pedidoItemLocal.dia27,
                    dia28: this.pedidoItemLocal.dia28,
                    dia29: this.pedidoItemLocal.dia29,
                    dia30: this.pedidoItemLocal.dia30,
                    dia31: this.pedidoItemLocal.dia31,
                    qtd: this.pedidoItemLocal.qtd,
                    veiculo_id :  null,
                    peca_id :  this.pedidoItemLocal.peca_id.peca,
                    programa_id :   null,
                }
            );

        }

        if(this.data.edit == false){
            this.pedidoItemLocal = this.data.pedidoitem;
            console.log(this.pedidoItemLocal);

            this.gradeForm.patchValue(
                {
                    data: this.pedidoItemLocal.data,
                    mes: this.pedidoItemLocal.mes,
                    ano: this.pedidoItemLocal.ano,
                    desconto: 0,
                    dia01: this.pedidoItemLocal.dia01,
                    dia02: this.pedidoItemLocal.dia02,
                    dia03: this.pedidoItemLocal.dia03,
                    dia04: this.pedidoItemLocal.dia04,
                    dia05: this.pedidoItemLocal.dia05,
                    dia06: this.pedidoItemLocal.dia06,
                    dia07: this.pedidoItemLocal.dia07,
                    dia08: this.pedidoItemLocal.dia08,
                    dia09: this.pedidoItemLocal.dia09,
                    dia10: this.pedidoItemLocal.dia10,
                    dia11: this.pedidoItemLocal.dia11,
                    dia12: this.pedidoItemLocal.dia12,
                    dia13: this.pedidoItemLocal.dia13,
                    dia14: this.pedidoItemLocal.dia14,
                    dia15: this.pedidoItemLocal.dia15,
                    dia16: this.pedidoItemLocal.dia16,
                    dia17: this.pedidoItemLocal.dia17,
                    dia18: this.pedidoItemLocal.dia18,
                    dia19: this.pedidoItemLocal.dia19,
                    dia20: this.pedidoItemLocal.dia20,
                    dia21: this.pedidoItemLocal.dia21,
                    dia22: this.pedidoItemLocal.dia22,
                    dia23: this.pedidoItemLocal.dia23,
                    dia24: this.pedidoItemLocal.dia24,
                    dia25: this.pedidoItemLocal.dia25,
                    dia26: this.pedidoItemLocal.dia26,
                    dia27: this.pedidoItemLocal.dia27,
                    dia28: this.pedidoItemLocal.dia28,
                    dia29: this.pedidoItemLocal.dia29,
                    dia30: this.pedidoItemLocal.dia30,
                    dia31: this.pedidoItemLocal.dia31,
                    qtd: this.pedidoItemLocal.qtd,

                }
            );

        }


    }

    saveGrade(){
        this.gradeForm.patchValue(
            {
                planomidia_id: this.data.entidade,
            }
        );

        this.pedidoInsercaoItemService.save(this.gradeForm.value).subscribe(response => {
            console.log(response);

        });
    }

    setProgramaList(event){
        this.programaList = event.value.programalist;
    }


    setUnitPrice(event): void {
        this.gradeForm.patchValue(
            {
                valorUnit: event.value.valor,
            }
        );
    }

    qtdPorInsercao(event){
        let qtd = event.target.value;

        for (var _i = 0; _i <= 0; _i++) {

            console.log(qtd);
            qtd--;
        }


    }

    qtdTotal: number;

    setTotalPrice(): void {

        this.qtdTotal =
            parseInt(this.gradeForm.controls.dia01.value) +
            parseInt(this.gradeForm.controls.dia02.value) +
            parseInt(this.gradeForm.controls.dia03.value) +
            parseInt(this.gradeForm.controls.dia04.value) +
            parseInt(this.gradeForm.controls.dia05.value) +
            parseInt(this.gradeForm.controls.dia06.value) +
            parseInt(this.gradeForm.controls.dia07.value) +
            parseInt(this.gradeForm.controls.dia08.value) +
            parseInt(this.gradeForm.controls.dia09.value) +
            parseInt(this.gradeForm.controls.dia10.value) +
            parseInt(this.gradeForm.controls.dia11.value) +
            parseInt(this.gradeForm.controls.dia12.value) +
            parseInt(this.gradeForm.controls.dia13.value) +
            parseInt(this.gradeForm.controls.dia14.value) +
            parseInt(this.gradeForm.controls.dia15.value) +
            parseInt(this.gradeForm.controls.dia16.value) +
            parseInt(this.gradeForm.controls.dia17.value) +
            parseInt(this.gradeForm.controls.dia18.value) +
            parseInt(this.gradeForm.controls.dia19.value) +
            parseInt(this.gradeForm.controls.dia20.value) +
            parseInt(this.gradeForm.controls.dia21.value) +
            parseInt(this.gradeForm.controls.dia22.value) +
            parseInt(this.gradeForm.controls.dia23.value) +
            parseInt(this.gradeForm.controls.dia24.value) +
            parseInt(this.gradeForm.controls.dia25.value) +
            parseInt(this.gradeForm.controls.dia26.value) +
            parseInt(this.gradeForm.controls.dia27.value) +
            parseInt(this.gradeForm.controls.dia28.value) +
            parseInt(this.gradeForm.controls.dia29.value) +
            parseInt(this.gradeForm.controls.dia30.value) +
            parseInt(this.gradeForm.controls.dia31.value)

        this.gradeForm.patchValue(

            {
                qtd: this.qtdTotal,
                valor:  this.gradeForm.controls.valorUnit.value * this.qtdTotal,
            }
        );


    }

    //Cliente reactive form
    gradeForm = this.fb.group({

        data: [''],
        mes: [''],
        ano: [''],
        desconto: 0,
        dia01: 0,
        dia02: 0,
        dia03: 0,
        dia04: 0,
        dia05: 0,
        dia06: 0,
        dia07: 0,
        dia08: 0,
        dia09: 0,
        dia10: 0,
        dia11: 0,
        dia12: 0,
        dia13: 0,
        dia14: 0,
        dia15: 0,
        dia16: 0,
        dia17: 0,
        dia18: 0,
        dia19: 0,
        dia20: 0,
        dia21: 0,
        dia22: 0,
        dia23: 0,
        dia24: 0,
        dia25: 0,
        dia26: 0,
        dia27: 0,
        dia28: 0,
        dia29: 0,
        dia30: 0,
        dia31: 0,
        faturamento: [''],
        obs: [''],
        qtd: [''],
        valor:0,
        valorUnit: 0,
        vencimento: [''],
        pedidoinsercao_id :  null,
        pedidoinsercao_id_nome :  null,
        pedidoinsercao_id_codigo :  null,
        planomidia_id :   null,
        veiculo_id :  null,
        peca_id :  null,
        programa_id :   null,


    });

    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'delete-dialog',
    templateUrl: 'delete-dialog.html',
})
export class DeleteGradeDialog {

    constructor(
        private pedidoInsercaoItemService: PedidoInsercaoItemService,
        public dialogRef: MatDialogRef<DeleteGradeDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    deleteGrade(){

        this.pedidoInsercaoItemService.delete(this.data.pedidoitem.id).subscribe(response => {
            console.log(response);
            this.dialogRef.close();
        });

    }

}