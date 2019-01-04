import {DomainBase} from '../../utils/utils';
import {Formato} from "../formato/formato";

export interface Material extends DomainBase { 

     descricao: string;

    formatolist: Formato;
}