import {CommonsService} from '../../commons-service';
import {Injectable} from "@angular/core";
import {Contato} from "./contato";

@Injectable({ providedIn: 'root' })
export class ContatoService extends CommonsService<Contato> {

    getPathModule(): string {
        return 'contato';
    }
}
