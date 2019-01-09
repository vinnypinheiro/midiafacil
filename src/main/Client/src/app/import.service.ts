import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {PedidoInsercaoItem} from "./entidades/pedidoinsercaoitem/pedidoinsercaoitem";
import {PlanoMidia} from "./entidades/planomidia/planomidia";

@Injectable()
export class ImportService {


    public data: any;


    titleSource = new BehaviorSubject<any>(this.data);
    titleData$ = this.titleSource.asObservable()

    update(pedidoInsercaoItem: PedidoInsercaoItem, planomidia: PlanoMidia ){
        console.log(pedidoInsercaoItem)
        this.data = [
            {
                pedidoinsercaoitem: pedidoInsercaoItem
            },
            {
                planomidia: planomidia
            }
        ]
        this.titleSource.next(this.data)
    }


    gerarLote( planomidia: PlanoMidia ){
        console.log(planomidia)
        this.data =  planomidia;
            
        this.titleSource.next(this.data)
    }
}