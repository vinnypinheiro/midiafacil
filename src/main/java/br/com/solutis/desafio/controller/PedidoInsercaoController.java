package br.com.solutis.desafio.controller;
import br.com.solutis.desafio.domain.PedidoInsercao;
import br.com.solutis.desafio.domain.PlanoMidia;
import br.com.solutis.desafio.helper.filter.FilterData;
import br.com.solutis.desafio.service.PedidoInsercaoItemService;
import br.com.solutis.desafio.service.PedidoInsercaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.concurrent.atomic.AtomicInteger;


@RestController("PedidoInsercaoController")
@RequestMapping("/pedidoinsercao")
public class PedidoInsercaoController {


    @Autowired
    PedidoInsercaoService pedidoinsercaoService;

    @Autowired
    PedidoInsercaoItemService pedidoInsercaoItemService;

    @RequestMapping(value = "/saveLote", method = RequestMethod.POST)
    public ResponseEntity saveLote(@RequestBody PlanoMidia bean) {

        PlanoMidia teste = new PlanoMidia();

        bean.getPedidoDeInsercaoItemlist().sort(Comparator.comparing(a -> a.getVeiculo_id().getNomefantasia()));

        AtomicInteger counter = new AtomicInteger(1);

        bean.getPedidoDeInsercaoItemlist().forEach(pil -> {

            int cod = counter.getAndIncrement();


            PedidoInsercao pi = new PedidoInsercao();
            pi.setPlanomidia_id(bean);
            pi.setCliente_id(bean.getCliente_id());
            pi.setAgencia_id(bean.getAgencia_id());
            pi.setVeiculo_id(pil.getVeiculo_id());
            pi.setDataemissao(bean.getData());
            pi.setOsagencia(bean.getOsagencia());

            pi.setCodigo("2019.01.1"+cod);

             pi.setStatus("APROVADO");

             pi.setFaturamentotxt("- FATURAR PELO VALOR LIQUIDO A FAVOR DO CLIENTE \n - PAGAMENTO VIA TRANSFERÊNCIA BANCÁRIA ");
             pi.setVencimentotxt("- CONTRA APRESENTAÇÃO \n - FATURAR APÓS TÉRMINO DA VEICULAÇÃO ");
             pi.setObs("- ENVIAR NOTA FISCAL E COMPROVANTE DE VEÍCULAÇÃO PARA \n - FAT@MULTIMIDIA.XYZ ");

             pi.setPeriodo(pil.getMes()+"/"+pil.getAno());
             pi.setTotalbruto(pil.getValor());
             pi.setComissao(0.0);
             pi.setTotalliquido(pil.getValor());

             pil.setStatus("APROVADO");


             pedidoinsercaoService.save(pi);
             pil.setPedidoinsercao_id(pi);
            pedidoInsercaoItemService.save(pil);
        });

        return new ResponseEntity( HttpStatus.OK );

            }


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity save(@RequestBody PedidoInsercao bean) {



        return this.buildResponse(pedidoinsercaoService.save(bean));

    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity query(@RequestBody FilterData filterData) {

        //pedidoinsercaoService.getList(filterData.getPage());
        //pedidoinsercaoService.select(filterData);

        return this.buildResponse( pedidoinsercaoService.getList(filterData.getPage()));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity findById(@PathVariable("id") Long id) {

        return this.buildResponse(pedidoinsercaoService.getById(id));

    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") String id) {

         pedidoinsercaoService.delete(Long.valueOf(id));

    }

    protected <T> ResponseEntity<T> buildResponse(T value) {
        return new ResponseEntity<T>(value, (value != null) ? HttpStatus.OK : HttpStatus.NO_CONTENT);
    }
}
