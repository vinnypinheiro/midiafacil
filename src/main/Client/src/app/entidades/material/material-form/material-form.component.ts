import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonsForm} from '../../../commons-form';
import {FilterData} from '../../../components/interfaces';
import {CommonsService} from '../../../commons-service';
import {Material} from '../material';
import {MaterialService} from '../material.service';
import {TipoMidiaService} from '../../tipomidia/tipomidia.service';
import {FormBuilder} from "@angular/forms";
import {fuseAnimations} from "../../../../@fuse/animations";
import {Formato} from "../../formato/formato";
import {FormatoService} from "../../formato/formato.service";

@Component({
    selector: 'gov-material-form',
    templateUrl: './material-form.component.html',
    styleUrls: ['./material-form-component.scss'],
    animations   : fuseAnimations,
})
export class MaterialFormComponent extends CommonsForm<Material> implements OnInit {

    formato: Formato;

    constructor(private fb: FormBuilder,
                private formatoService: FormatoService,
                apiService: MaterialService,
                private tipomidiaService: TipoMidiaService,
                route: ActivatedRoute,
                router: Router ) {
        super(apiService, route, router);
    }

    ngOnInit() {
        this.formatoService.loadByFilter(this.getDefaultFilter()).subscribe(response => {
            this.formato = response.content;
        });
    }


    //Mateiral reactive form
    activeForm = this.fb.group({
        descricao: null,
        formato_id: null

    });

    saveEntity() {
        // TODO: Use EventEmitter with form value
        console.warn(this.activeForm.value);
        this.activeBean = this.activeForm.value;
        this.save();
        //this.apiService.save(this.clienteForm.value);
    }

    getLookupService(lookupName: string): CommonsService<any> {
        switch (lookupName) {
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
        //console.log(this.activeBean.material.id);
    }
} 

