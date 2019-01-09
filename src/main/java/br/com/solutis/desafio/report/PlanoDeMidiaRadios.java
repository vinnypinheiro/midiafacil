package br.com.solutis.desafio.report;

import java.util.HashMap;

/**
 * Created by Fabricio on 22/10/2017.
 */
public class PlanoDeMidiaRadios extends Report {

    @Override
    public  void buildSqlWithId(Long id) {
        sql = " ";
        sql += " select \n";
        sql += " a.nomefantasia as agencia, \n";
        sql += "         'RÁDIOS' as midia, \n";
        sql += " c.nomefantasia as cliente,  \n";
        sql += " '' as responsavel, \n";
        sql += "         ca.nome as campanha, \n";
        sql += " v.cidade as mercado, \n";
        sql += " 'GIF PADRÃO' as formato, \n";
        sql += " '' as periodo, \n";
        sql += " '' as programa, \n";
        sql += " '' as hora, \n";
        sql += " '' as mercado, \n";
        sql += "v.nomefantasia as veiculo,  \n";
        sql += "  'ww.com.br' as site, \n";
        sql += " '' as responsavel, \n";
        sql += " pii.qtd as qtd, \n";
        sql += " pii.valor_unit as custo_unitario, \n";
        sql += " a.nomefantasia as agencia, \n";
        sql += "  cast( pii.dia01 as int8) as d1, \n";
        sql += "  cast( pii.dia02 as int8)  as d2, \n";
        sql += "  cast( pii.dia03 as int8)  as d3, \n";
        sql += "  cast( pii.dia04 as int8)  as d4, \n";
        sql += "  cast( pii.dia05 as int8)  as d5, \n";
        sql += "  cast( pii.dia06 as int8)  as d6, \n";
        sql += "  cast( pii.dia07 as int8)  as d7, \n";
        sql += "  cast( pii.dia08 as int8)  as d8, \n";
        sql += "  cast( pii.dia09 as int8)  as d9, \n";
        sql += "  cast( pii.dia10 as int8)  as d10, \n";
        sql += "  cast( pii.dia11 as int8)  as d11, \n";
        sql += "  cast( pii.dia12 as int8)  as d12, \n";
        sql += "  cast( pii.dia13 as int8) as d13, \n";
        sql += "  cast( pii.dia14 as int8)  as d14, \n";
        sql += "  cast( pii.dia15 as int8)  as d15, \n";
        sql += "  cast( pii.dia16 as int8) as d16, \n";
        sql += "  cast( pii.dia17 as int8)  as d17, \n";
        sql += "  cast( pii.dia18 as int8)  as d18, \n";
        sql += "  cast( pii.dia19 as int8)  as d19, \n";
        sql += "  cast( pii.dia20 as int8)  as d20, \n";
        sql += "  cast( pii.dia21 as int8)  as d21, \n";
        sql += "  cast( pii.dia22 as int8)  as d22, \n";
        sql += "  cast( pii.dia23 as int8)  as d23, \n";
        sql += "  cast( pii.dia24 as int8)  as d24, \n";
        sql += "  cast( pii.dia25 as int8)  as d25, \n";
        sql += "  cast( pii.dia26 as int8) as d26, \n";
        sql += "  cast( pii.dia27 as int8)  as d27, \n";
        sql += "  cast( pii.dia28 as int8)  as d28, \n";
        sql += "  cast( pii.dia29 as int8)  as d29, \n";
        sql += "  cast( pii.dia30 as int8)  as d30, \n";
        sql += "  cast( pii.dia31 as int8)  as d31, \n";
        sql += "  pii.mes as mes, \n";
        sql += "  pii.ano as ano, \n";
        sql += " '' as nome \n";
        sql += " from pedido_insercao_item pii \n";
        sql += " left join veiculo v on (v.id = pii.veiculo_id) \n";
        sql += " left join programa p on (p.veiculo_id = pii.programa_id) \n";
        sql += " left join plano_midia pm on (pm.id = "+id+") \n";
        sql += " left join agencia a on (a.id = pm.agencia_id) \n";
        sql += " left join cliente c on (c.id = pm.cliente_id) \n";
        sql += " left join campanha ca on (ca.id = pm.campanha_id)  \n";
        sql += " where pii.planomidia_id = "+id+" \n order by pii.id";



    }

    public HashMap<String,Object> getParametros(){
        HashMap<String,Object> parametros = new HashMap<String,Object>();

        String LOGO = "X:\\IdeiaProjects\\novo\\midiafacil\\midiafacil\\resources\\logo.jpg";
        parametros.put("LOGO", LOGO);


        return  parametros;
    }
}
