import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; 
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';


import {DomainBase, Operation} from '../../../utils/utils';

import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Veiculo} from '../veiculo'; 
import {VeiculoService} from '../veiculo.service';
import {TipoMidiaService} from '../../tipomidia/tipomidia.service';
import {DialogPecaForm} from "../../planomidia/planomidia-view/planomidia-view.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Endereco} from "../../endereco/endereco";
import {EnderecoService} from "../../endereco/endereco.service";
import {ContatoService} from "../../contato/contato.service";
import {Contato} from "../../contato/contato";
import {Cliente} from "../../cliente/cliente";
import {Telefone} from "../../telefone/telefone";
import {TelefoneService} from "../../telefone/telefone.service";
import {Email} from "../../email/email";
import {EmailService} from "../../email/email.service";
import {Sites} from "../../sites/sites";
import {SitesService} from "../../sites/sites.service";
import {ContaBancaria} from "../../contabancaria/contabancaria";
import {ContaBancariaService} from "../../contabancaria/contabancaria.service";

@Component({
 selector: 'gov-veiculo-form', 
 templateUrl: './veiculo-form.component.html',
    animations   : fuseAnimations,
    styleUrls: ['./veiculo-form.component.scss']
}) 
export class VeiculoFormComponent extends CommonsForm<Veiculo> implements OnInit { 

   entity: any;

    constructor( public dialog: MatDialog,
                          private fb: FormBuilder,
                            apiService: VeiculoService,
                            private tipomidiaService: TipoMidiaService, 
                             route: ActivatedRoute, 
 router: Router ) { 
         super(apiService, route, router); 
     } 

     ngOnInit() { 
        this.beanSubscribe = this.route.params.subscribe(params => {
            this.beanId = params['id'];
            if(this.beanId === "novo"){
              this.beanId = "";
              this.operation = Operation.CREATE;
            }else {
              this.operation = Operation.SELECT;
              this.apiService.findById(this.beanId).subscribe(response => {
                this.activeBean = (<any>response);

                console.log(this.activeBean)

                this.activeForm.patchValue({
                    id: this.activeBean.id,
                    nomefantasia: this.activeBean.nomefantasia, 
                    cnpj: this.activeBean.cnpj,
                    praca: this.activeBean.praca,
                    cpf: this.activeBean.cpf,
                    data_cadastro: this.activeBean.data_cadastro,
                    inscricaoestadual: this.activeBean.inscricaoestadual,
                    inscricaomunicipal: this.activeBean.inscricaomunicipal,
                    obs: this.activeBean.obs,
                    razaosocial: this.activeBean.razaosocial,
                                       
                  });


                
              });
            }
           

        });


       
     }

       //Cliente reactive form
     activeForm = this.fb.group({
        id: [''],
        data_cadastro:  [''],
        nomefantasia: [''],
        razaosocial:  [''], 
        inscricaoestadual:  [''],
        inscricaomunicipal: [''],
        cnpj: [''],
        cpf:  [''],
         praca:  [''],
         obs:  [''],
       
       
        contaBancariaList: this.fb.array([this.addContasBancariasGroup()]),
        contatoList: this.fb.array([this.addContatoGroup()]),
        siteList: this.fb.array([this.addSiteGroup()]),
        telefoneList: this.fb.array([this.addTelefoneGroup()]),
        emailList: this.fb.array([this.addEmailGroup()]),
        enderecoList: this.fb.array([this.addAddressGroup()]),
      
    });

    addAddressGroup() {
       return this.fb.group({
         endereco: [null],
         bairro: [null],
         cidade: [null],
           cep: [null],
           estado: [null]
       });
     }

     addContasBancariasGroup() {
        return this.fb.group({
            banco:  [null],
            agencia:  [null],
            conta:  [null],
            cnpjcpf: [null],
            operacao:  [null],
            tipoconta:  [null],
            favorecido: [null]
        });
      }

      addContatoGroup() {
        return this.fb.group({
          contato: [null],
          email: [null],
          telefone: [null],
            tipocontato: [null]
        });
      }

      addSiteGroup() {
        return this.fb.group({
          tiposite: [null],
          site: [null]
        });
      }

      addTelefoneGroup() {
        return this.fb.group({
          tipotelefone: [null],
            numero: [null]
        });
      }

      addEmailGroup() {
        return this.fb.group({
          tipoemail: [null],
          email: [null]
        });
      }


    openEderecoDialog(): void {
        const dialogRef = this.dialog.open(DialogEnderecoForm, {

            data:{
                entidade: this.activeBean
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.ngOnInit();
        });

    }

    openContatoDialog(): void {
        const dialogRef = this.dialog.open(DialogContatoForm, {

            data:{
                entidade: this.activeBean
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.ngOnInit();
        });

    }

    openContaDialog(): void {
        const dialogRef = this.dialog.open(DialogContaBancariaForm, {

            data:{
                entidade: this.activeBean
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.ngOnInit();
        });

    }

    openEmailDialog(): void {
        const dialogRef = this.dialog.open(DialogEmailForm, {

            data:{
                entidade: this.activeBean
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.ngOnInit();
        });

    }

    openSiteDialog(): void {
        const dialogRef = this.dialog.open(DialogSitesForm, {

            data:{
                entidade: this.activeBean
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.ngOnInit();
        });

    }

    openTelefoneDialog(): void {
        const dialogRef = this.dialog.open(DialogTelefoneForm, {

            data:{
                entidade: this.activeBean
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.ngOnInit();
        });

    }


    saveVeiculo() {
       // TODO: Use EventEmitter with form value
       console.warn(this.activeForm.value);
       this.activeBean = this.activeForm.value;
       this.save();
       //this.apiService.save(this.clienteForm.value);
     }

     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'uf': {
             } 

             case 'tipomidia': { 
                 return this.tipomidiaService; 
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'uf': { 
                 return this.buildLookupFilter('uf'); 
             }

             case 'tipomidia': { 
                 return this.buildLookupFilter('tipomidia'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.veiculo.id); 
     } 
}

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: './adicionar-endereco.html',
})
export class DialogEnderecoForm {

    endereco: Endereco;

    constructor(
        public dialogRef: MatDialogRef<DialogPecaForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private enderecoService: EnderecoService
    ) {

    }

    saveEndereco(){

        this.enderecoForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.enderecoService.save(this.enderecoForm.value).subscribe(response => {
            console.log(response);
            this.closeDialog();
        });
    }

    //Cliente reactive form
    enderecoForm = this.fb.group({
        endereco: [null],
        bairro: [null],
        cidade: [null],
        cep: [null],
        estado: [null],
        veiculo_id: null,
    });


    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'dialog-content-contato-dialog',
    templateUrl: './adicionar-contato.html',
})
export class DialogContatoForm {

    contato: Contato;

    constructor(
        public dialogRef: MatDialogRef<DialogContatoForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private contatoService: ContatoService
    ) {

    }

    saveContato(){

        this.contatoForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.contatoService.save(this.contatoForm.value).subscribe(response => {
            console.log(response);
            this.closeDialog();
        });
    }

    //Cliente reactive form
    contatoForm = this.fb.group({

    contato: [null],
    email: [null],
    telefone: [null],
    tipocontato: [null],
        veiculo_id: null,
    });


    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'dialog-content-telefone-dialog',
    templateUrl: './adicionar-telefone.html',
})
export class DialogTelefoneForm {

    telefone: Telefone;

    constructor(
        public dialogRef: MatDialogRef<DialogTelefoneForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private telefoneService: TelefoneService
    ) {

    }

    saveTelefone(){

        this.telefoneForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.telefoneService.save(this.telefoneForm.value).subscribe(response => {
            console.log(response);
            this.closeDialog();
        });
    }

    //Cliente reactive form
    telefoneForm = this.fb.group({

        tipotelefone: null,
    numero:null,
        veiculo_id: null,
    });


    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'dialog-content-email-dialog',
    templateUrl: './adicionar-email.html',
})
export class DialogEmailForm {

    email: Email;

    constructor(
        public dialogRef: MatDialogRef<DialogEmailForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private emailService: EmailService
    ) {

    }

    saveEmail(){

        this.emailForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.emailService.save(this.emailForm.value).subscribe(response => {
            console.log(response);
            this.closeDialog();
        });
    }

    //Cliente reactive form
    emailForm = this.fb.group({

        email: [null],
        tipoemail: [null],
        veiculo_id: null,
    });


    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'dialog-content-sites-dialog',
    templateUrl: './adicionar-site.html',
})
export class DialogSitesForm {

    sites: Sites;

    constructor(
        public dialogRef: MatDialogRef<DialogSitesForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private sitesService: SitesService
    ) {

    }

    saveSites(){

        this.sitesForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.sitesService.save(this.sitesForm.value).subscribe(response => {
            console.log(response);
            this.closeDialog();
        });
    }

    //Cliente reactive form
    sitesForm = this.fb.group({

        tiposite: null,
     site: null,
        veiculo_id: null,
    });


    closeDialog(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: 'dialog-content-contabancaria-dialog',
    templateUrl: './adicionar-conta.html',
})
export class DialogContaBancariaForm {

    contabancaria: ContaBancaria;

    constructor(
        public dialogRef: MatDialogRef<DialogContaBancariaForm>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private contabancariaService: ContaBancariaService
    ) {

    }

    saveContaBancaria(){

        this.contabancariaForm.patchValue(
            {
                veiculo_id: this.data.entidade,
            }
        );

        this.contabancariaService.save(this.contabancariaForm.value).subscribe(response => {
            console.log(response);
            this.closeDialog();
        });
    }

    //Cliente reactive form
    contabancariaForm = this.fb.group({

        banco: null,
    agencia: null,
    conta: null,
    operacao: null,
    tipoconta: null,
    cnpjcpf:null,
    favorecido: null,
        veiculo_id: null,
    });


    closeDialog(): void {
        this.dialogRef.close();
    }
}






