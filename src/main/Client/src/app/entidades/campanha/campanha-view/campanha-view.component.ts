import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {Operation} from "../../../utils/utils";
import {CommonsService} from "../../../commons-service";
import {Campanha} from "../campanha";
import {CommonsForm} from "../../../commons-form";
import {ActivatedRoute, Router} from "@angular/router";
import {UfService} from "../../uf/uf.service";
import {CampanhaService} from "../campanha.service";
import {FormBuilder} from "@angular/forms";
import {FilterData} from "../../../components/interfaces";


@Component({
  selector: 'app-campanha-view',
  templateUrl: './campanha-view.component.html',
  styleUrls: ['./campanha-view.component.scss'],
    animations   : fuseAnimations
})
export class CampanhaViewComponent extends CommonsForm<Campanha> implements OnInit {

    entity: object = {};

    constructor(private fb: FormBuilder,
                apiService: CampanhaService,
                private ufService: UfService,
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

                    this.activeForm.patchValue({


                    });


                });
            }
        });

    }

    //campanha reactive form
    activeForm = this.fb.group({
        datafim: null,
        datainicio: null,
        nome: null,
        cliente_id:  null,

    });

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

    getLookupService(lookupName: string): CommonsService<any> {
        switch (lookupName) {
            case 'uf': {
                return this.ufService;
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
