import {CommonsService} from '../../commons-service';
import {Injectable} from "@angular/core";
import {Email} from "./email";

@Injectable({ providedIn: 'root' })
export class EmailService extends CommonsService<Email> {

    getPathModule(): string {
        return 'email';
    }
}
