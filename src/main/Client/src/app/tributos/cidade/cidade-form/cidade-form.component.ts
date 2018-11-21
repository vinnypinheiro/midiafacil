import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Cidade} from '../cidade'; 
import {CidadeService} from '../cidade.service'; 
import {UfService} from '../../uf/uf.service'; 

@Component({
 selector: 'gov-cidade-form', 
 templateUrl: './cidade-form.component.html', 
 //styleUrls: ['./cidade-form.component.css'] 
}) 
export class CidadeFormComponent extends CommonsForm<Cidade> implements OnInit { 

    constructor(apiService: CidadeService, 
                            private ufService: UfService, 
                route: ActivatedRoute, 
                router: Router ) {
         super(apiService, route, router); 
    }

    ngOnInit() {
        super.ngOnInit();
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

    getDeLookupFilter(lookupValue: any): FilterData {
        switch (lookupValue.name) {
            case 'uf': {
                return this.buildLookupFilter('trb_uf');
            }

            default: {
                console.log('filtro não disponibilizado para ', lookupValue.name)
            }
        }
        return null;
    }

    onButtonActionClick(): void {
        //console.log(this.activeBean.cidade.id);
    }
} 

