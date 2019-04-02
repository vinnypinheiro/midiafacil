import {CommonsService} from '../../commons-service';
import {Injectable} from "@angular/core";
import {Telefone} from "./telefone";

@Injectable({ providedIn: 'root' })
export class TelefoneService extends CommonsService<Telefone> {

    getPathModule(): string {
        return 'telefone';
    }
}
