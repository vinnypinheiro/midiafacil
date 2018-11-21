import {DomainBase} from '../../utils/utils';
import {PlanoMidia} from "../planomidia/planomidia";
import {TipoMidia} from "../tipomidia/tipomidia";
import {TipoMidiaDigital} from "../tipomidiadigital/tipomidiadigital";

export interface Peca extends DomainBase {

     centimetros: number;
     colunas: string;
     duracao: string;
     peca: string;
     titulo: string;
     formato_id_id :  number;
     formato_id_nome :  string;
     formato_id_codigo :  string;
     formatorevista_id_id :  number;
     formatorevista_id_nome :  string;
     formatorevista_id_codigo :  string;
     material_id_id :  number;
     material_id_nome :  string;
     material_id_codigo :  string;
     planomidia_id :  PlanoMidia;
     tipomidia_id :  TipoMidia;
     tipomidiadigital_id : TipoMidiaDigital;
}
