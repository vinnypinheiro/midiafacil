import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {ServerResponse} from "../commons-service";

/**
 * Created by paulovieira on 04/09/18.
 */


@Injectable()
export class MainPageService {

  protected API_ROOT_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getArrecadacaoTributos(): Observable<any> {
    return this.http.post<ServerResponse<any>>(`${this.API_ROOT_URL}/${this.getPathModule()}/getarrecadacaotributos`, "");
  }


  getPathModule() : string{
    return 'dashboard';
  }


}
