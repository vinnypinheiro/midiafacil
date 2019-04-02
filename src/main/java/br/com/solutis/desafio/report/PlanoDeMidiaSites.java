package br.com.solutis.desafio.report;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

/**
 * Created by Fabricio on 22/10/2017.
 */
public class PlanoDeMidiaSites extends Report {


    public  void buildSqlWithId(Long id) {
        sql += " select         \n" ;
        sql += " 'SITES' as midia, \n" ;
        sql += " ag.nomefantasia as agencia, \n" ;
        sql += " cl.nomefantasia as cliente, \n" ;
        sql += " 'GIF PADRÃO' as formato, \n" ;
        sql += " 'nome' as nome, \n" ;
        sql += " v.cidade as mercado, \n" ;
        sql += " v.nomefantasia as veiculo, \n" ;
        sql += " v.site as site, \n" ;
        sql += " pii.qtd as qtd,  \n" ;
        sql += " p.valor as custo_unitario, \n" ;
        sql += " p.descricao as responsavel, \n" ;
        sql += " 'JAN/2019' as periodo, \n" ;
        sql += " 'ROTATIVO' as programa, \n" ;
        sql += " 'ROTATIVO' as hora, \n" ;
        sql += " cp.nome as campanha, \n" ;
        sql += " pm.codigo as codigo \n";
        sql += " from pedido_insercao_item pii \n" ;
        sql += " left join plano_midia pm on (pm.id =  "+id+") \n" ;
        sql += " left join agencia ag on (ag.id = pm.agencia_id) \n" ;
        sql += " left join programa p on (p.id = pii.programa_id) \n" ;
        sql += " left join cliente cl on (cl.id = pm.cliente_id) \n" ;
        sql += " left join campanha cp on (cp.id = pm.campanha_id) \n" ;
        sql += " left join veiculo v on (v.id = pii.veiculo_id) \n" ;
        sql += " where pii.planomidia_id = "+id+" \n" ;
        sql += " order by veiculo \n" ;
    }

    public HashMap<String,Object> getParametros(){
        HashMap<String,Object> parametros = new HashMap<String,Object>();

        String LOGO = "X:\\IdeiaProjects\\novo\\midiafacil\\midiafacil\\resources\\logo.jpg";
        parametros.put("LOGO", LOGO);

        String CNPJ = "X:\\IdeiaProjects\\novo\\midiafacil\\midiafacil\\resources\\cnpj.png";
        parametros.put("CNPJ", CNPJ);

        String ASSINATURA = "X:\\IdeiaProjects\\novo\\midiafacil\\midiafacil\\resources\\assinatura.png";
        parametros.put("ASSINATURA", ASSINATURA);

        return  parametros;
    }
}
