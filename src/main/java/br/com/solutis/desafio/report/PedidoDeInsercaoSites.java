package br.com.solutis.desafio.report;


import java.util.HashMap;

/**
 * Created by Fabricio on 22/10/2017.
 */
public class PedidoDeInsercaoSites extends Report {

    @Override
    public  void buildSqlWithId(Long id) {
        sql = "";
        sql += " select         \n" ;
        sql += " 'midia' as midia, \n" ;
        sql += " ag.nomefantasia as agencia, \n" ;
        sql += " cl.nomefantasia as cliente, \n" ;
        sql += " 'GIF PADRÃO' as formato, \n" ;
        sql += " 'nome' as nome, \n" ;
        sql += " v.cidade as mercado, \n" ;
        sql += " v.nomefantasia as veiculo, \n" ;
        sql += " 'site' as site, \n" ;
        sql += " pii.qtd as qtd,  \n" ;
        sql += " p.valor as custo_unitario, \n" ;
        sql += " 'responsavel' as responsavel, \n" ;
        sql += " 'JAN/2019' as periodo, \n" ;
        sql += " 'ROTATIVO' as programa, \n" ;
        sql += " 'ROTATIVO' as hora, \n" ;
        sql += " cp.nome as campanha \n" ;
        sql += " from pedido_insercao_item pii \n" ;
        sql += " left join plano_midia pm on (pm.id =  "+id+") \n" ;
        sql += " left join agencia ag on (ag.id = pm.agencia_id) \n" ;
        sql += " left join programa p on (p.veiculo_id = pii.veiculo_id) \n" ;
        sql += " left join cliente cl on (cl.id = pm.cliente_id) \n" ;
        sql += " left join campanha cp on (cp.id = pm.campanha_id) \n" ;
        sql += " left join veiculo v on (v.id = pii.veiculo_id) \n" ;
        sql += " where pii.planomidia_id = "+id+" \n" ;
        sql += "";
    }

    public HashMap<String,Object> getParametros(){
        HashMap<String,Object> parametros = new HashMap<String,Object>();

        String LOGO = "/home/link3/IdeaProjects/novo/midiafacil/src/main/resources/logo.png";
        parametros.put("LOGO", LOGO);


        return  parametros;
    }
}
