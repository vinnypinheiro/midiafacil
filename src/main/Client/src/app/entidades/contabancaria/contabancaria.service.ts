import {CommonsService} from '../../commons-service';
import {Injectable} from "@angular/core";
import {ContaBancaria} from "./contabancaria";

@Injectable({ providedIn: 'root' })
export class ContaBancariaService extends CommonsService<ContaBancaria> {

    getPathModule(): string {
        return 'contabancaria';
    }
}
