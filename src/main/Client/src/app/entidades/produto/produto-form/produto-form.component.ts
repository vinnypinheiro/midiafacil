import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form';
import {FilterData} from '../../../components/interfaces';
import {CommonsService} from '../../../commons-service';
import {Produto} from '../produto';
import {ProdutoService} from '../produto.service';
import {TipoProdutoService} from '../../tipoproduto/tipoproduto.service';
import {fuseAnimations} from "../../../../@fuse/animations";
import {FormBuilder} from "@angular/forms";
import {Material} from "../../material/material";
import {TipoMidia} from "../../tipomidia/tipomidia";
import {TipoMidiaService} from "../../tipomidia/tipomidia.service";
import {MaterialService} from "../../material/material.service";
import {Formato} from "../../formato/formato";

@Component({
    selector: 'gov-produto-form',
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form-component.scss'] ,
    animations   : fuseAnimations,
})
export class ProdutoFormComponent extends CommonsForm<Produto> implements OnInit {

   public tipomidia: TipoMidia;
    public material: Material;
    public formatoList: Formato[];

    constructor(private fb: FormBuilder,
                private materialService: MaterialService,
                apiService: ProdutoService,
                private tipoMidiaService: TipoMidiaService,
                private tipoprodutoService: TipoProdutoService,
                route: ActivatedRoute,
                router: Router ) {
        super(apiService, route, router);
    }

    ngOnInit() {
        this.tipoMidiaService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
            this.tipomidia = response.content;
        });

        this.materialService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
            this.material = response.content;
        });

    }

    //campanha reactive form
    activeForm = this.fb.group({
        descricao: null,

        material_id: null,
        tipomidia_id: null,
        formato_id: null,


    });

    setFormatoList(event){
        this.formatoList = event.value.formatolist;
    }
    saveEntity() {
        // TODO: Use EventEmitter with form value
        console.warn(this.activeForm.value);
        this.activeBean = this.activeForm.value;
        this.save();
        //this.apiService.save(this.clienteForm.value);
    }

    getLookupService(lookupName: string): CommonsService<any> {
        switch (lookupName) {

            case 'tipoproduto': {
                return this.tipoprodutoService;
            }

            default: {
                console.log('serviço não disponibilizado para ', lookupName)
                return this.apiService;
            }
        }
    }

    getDeLookupFilter(lookupValue: any): FilterData {
        switch (lookupValue.name) {
            case 'formato': {
                return this.buildLookupFilter('formato');
            }

            case 'tipoproduto': {
                return this.buildLookupFilter('tipoproduto');
            }

            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name)
            }
        }
        return null;
    }

    onButtonActionClick(): void {
        //console.log(this.activeBean.produto.id);
    }
} 

