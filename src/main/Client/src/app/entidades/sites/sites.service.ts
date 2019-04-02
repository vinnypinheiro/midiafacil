import {CommonsService} from '../../commons-service';
import {Injectable} from "@angular/core";
import {Sites} from "./sites";

@Injectable({ providedIn: 'root' })
export class SitesService extends CommonsService<Sites> {

    getPathModule(): string {
        return 'site';
    }
}
