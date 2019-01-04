import {DomainBase} from '../../utils/utils';
import {Material} from "../material/material";
import {TipoMidia} from "../tipomidia/tipomidia";
import {Formato} from "../formato/formato";

export interface Produto extends DomainBase {

    descricao: string;

    material_id: Material;
    tipomidia_id: TipoMidia;
    formato_id: Formato;

}