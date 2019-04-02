package br.com.solutis.desafio.report;


import java.util.HashMap;

/**
 * Created by Fabricio on 22/10/2017.
 */
public class PedidoDeInsercaoRadios extends Report {

    @Override
    public  void buildSqlWithId(Long id) {
        sql = "";
      sql = " select\n" ;
	  sql += " v.nomefantasia as veiculo,\n" ;
	  sql += " v.razaosocial as razao_social,\n" ;
	  sql += "  upper(v.cidade) as cidade,\n" ;
	  sql += " co.contato as contato,\n" ;
	  sql += " 'BA' as uf,\n" ;
	  sql += " 'midia' as midia,\n" ;
	  sql += " en.cep as cep,\n" ;
	  sql += " v.fax as fax,\n" ;
	  sql += " co.telefone as tel,\n" ;
	  sql += " c.telefone as tel2,\n" ;
	  sql += " c.nomefantasia as veiculo2,\n" ;
	  sql += " c.razaosocial as razao_social2,\n" ;
	  sql += " c.razaosocial as representante2,\n" ;
	  sql += " c.cnpj as cnpj2,\n" ;
	  sql += " 'SSA' as praca2,\n" ;
	  sql += " c.inscricaomunicipal as inscricao_municipal2,   \n" ;
	  sql += " c.inscricaoestadual as inscricao_estadual2,     \n" ;
	  sql += " c.email as email2,\n" ;
	  sql += " c.cidade as cidade2,\n" ;
	  sql += " a.nomefantasia as contato2,\n" ;
	  sql += " 'BA' as uf2,\n" ;
	  sql += " 'MP3' as formato,\n" ;
	  sql += " pi.periodo as periodo,\n" ;
	  sql += " 'program' as programa,\n" ;
	  sql += " 'ROTATIVO' as hora,\n" ;
	  sql += " c.cep as cep2,\n" ;
	  sql += " '' as fax2,\n" ;
	  sql += " 'DIAS DAVILA2' as cidade2,\n" ;
	  sql += " a.nomefantasia as representante,\n" ;
	  sql += " v.endereco as endereco,\n" ;
	  sql += " v.cnpj as cnpj,\n" ;
	  sql += " v.praca as praca,\n" ;
	  sql += " v.bairro as bairro,\n" ;
	  sql += " a.inscricaoestadual as incricao_estadual,\n" ;
	  sql += " a.inscricaomunicipal as inscricao_municipal,\n" ;
	  sql += " co.email as email,\n" ;
	  sql += " 'pruduto' as produto,\n" ;
	  sql += " p.peca as peca,\n" ;
	  sql += " 'nomeXXX' as nome,\n" ;
	  sql += " v.cidade as mercado,\n" ;
	  sql += " c.endereco as endereco2,\n" ;
	  sql += " v.nomefantasia as veiculo,\n" ;
	  sql += " p.titulo as titulo_peca,\n" ;
	  sql += " cast( pii.dia01 as int8) as d1,\n" ;
	  sql += " cast( pii.dia02 as int8) as d2,\n" ;
	  sql += " cast( pii.dia03 as int8) as d3,\n" ;
	  sql += " cast( pii.dia04 as int8) as d4,\n" ;
	  sql += " cast( pii.dia05 as int8) as d5,\n" ;
	  sql += " cast( pii.dia06 as int8) as d6,\n" ;
	  sql += " cast( pii.dia07 as int8) as d7,\n" ;
	  sql += " cast( pii.dia08 as int8) as d8,\n" ;
	  sql += " cast( pii.dia09 as int8) as d9,\n" ;
	  sql += " cast( pii.dia10 as int8) as d10,\n" ;
	  sql += " cast( pii.dia11 as int8) as d11,\n" ;
	  sql += " cast( pii.dia12 as int8) as d12,\n" ;
	  sql += " cast( pii.dia13 as int8) as d13,\n" ;
	  sql += " cast( pii.dia14 as int8) as d14,\n" ;
	  sql += " cast( pii.dia15 as int8) as d15,\n" ;
	  sql += " cast( pii.dia16 as int8) as d16,\n" ;
	  sql += " cast( pii.dia17 as int8) as d17,\n" ;
	  sql += " cast( pii.dia18 as int8) as d18,\n" ;
	  sql += " cast( pii.dia19 as int8) as d19,\n" ;
	  sql += " cast( pii.dia20 as int8) as d20,\n" ;
	  sql += " cast( pii.dia21 as int8) as d21,\n" ;
	  sql += " cast( pii.dia22 as int8) as d22,\n" ;
	  sql += " cast( pii.dia23 as int8) as d23,\n" ;
	  sql += " cast( pii.dia24 as int8) as d24,\n" ;
	  sql += " cast( pii.dia25 as int8) as d25,\n" ;
	  sql += " cast( pii.dia26 as int8) as d26,\n" ;
	  sql += " cast( pii.dia27 as int8) as d27,\n" ;
	  sql += " cast( pii.dia28 as int8) as d28,\n" ;
	  sql += " cast( pii.dia29 as int8) as d29,\n" ;
	  sql += " cast( pii.dia30 as int8) as d30,\n" ;
	  sql += " cast( pii.dia31 as int8) as d31,\n" ;
	  sql += " pii.qtd as qtd,\n" ;
	  sql += " pii.valor_unit as custo_unitario, \n" ;
	  sql += " pii.valor as total_produto,\n" ;
	  sql += " pii.mes as mes,\n" ;
	  sql += " pi.osagencia as os_agencia,\n" ;
	  sql += " pi.vencimentotxt as vencimentotxt,\n" ;
	  sql += " pi.faturamentotxt as faturamentotxt,\n" ;
	  sql += " pi.obs as observacao,\n" ;
        sql += " pi.codigo as codigo,\n" ;
        sql += " pi.dataemissao as data_emissao,\n" ;
	  sql += " pii.ano as ano,\n" ;
	  sql += " pii.planomidia_id as planomidia,\n" ;
	  sql += " pm.desconto as desconto,\n" ;
	  sql += " cp.nome as campanha\n" ;
      sql += " from\n" ;
	  sql += " pedido_insercao pi\n" ;
      sql += " left join plano_midia pm on\n" ;
	  sql += " (pm.id = pi.planomidia_id)\n" ;
	  sql += " left join campanha cp on\n" ;
	  sql += " (cp.id = pm.campanha_id)\n" ;
      sql += " left join pedido_insercao_item pii on\n" ;
	  sql += " (pii.pedidoinsercao_id = pi.id)\n" ;
	  sql += " left join veiculo v on\n" ;
	  sql += " (v.id = pi.veiculo_id)\n" ;
	  sql += " left join  contato co on (co.veiculo_id = pi.veiculo_id)\n" ;
		sql += " left join  endereco en on (en.veiculo_id = pi.veiculo_id)\n" ;
	  sql += " left join cliente c on\n" ;
	  sql += " (c.id = pi.cliente_id)\n" ;
	  sql += " left join agencia a on \n" ;
	  sql += " (a.id =4)\n" ;
	  sql += " left join peca p on\n" ;
	  sql += " (p.id = pii.peca_id)\n" ;
	  sql += " where\n" ;
	  sql += " pi.id = "+id+" \n" ;
        sql += " LIMIT 1 \n" ;
	  sql += "";
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
