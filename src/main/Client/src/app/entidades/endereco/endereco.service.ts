import {CommonsService} from '../../commons-service';
import {Injectable} from "@angular/core";
import {Endereco} from "./endereco";

@Injectable({ providedIn: 'root' })
export class EnderecoService extends CommonsService<Endereco> {

    getPathModule(): string {
        return 'endereco';
    }
}
