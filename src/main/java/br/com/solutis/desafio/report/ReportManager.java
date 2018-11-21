package br.com.solutis.desafio.report;

/**
 * Created by Fabricio on 22/10/2017.
 */

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ReportManager {
    private String path; //Caminho base

    private String pathToReportPackage; // Caminho para o package onde estão armazenados os relatorios Jarper

    //Recupera os caminhos para que a classe possa encontrar os relatórios
    public ReportManager() {
        this.path = this.getClass().getClassLoader().getResource("").getPath();
        this.pathToReportPackage = this.path + "br/com/midiafacil/report/";
        System.out.println(path);
    }


    //Imprime/gera uma lista de Clientes
    public void imprimir(OutputStream outputStream) throws Exception
    {
        JasperReport report = JasperCompileManager.compileReport(this.getPathToReportPackage() + "teste.jrxml");


        JasperPrint print = JasperFillManager.fillReport(report, null,  new JREmptyDataSource());

        JasperExportManager.exportReportToPdfStream(print,outputStream );
    }

    public String getPathToReportPackage() {
        return this.pathToReportPackage;
    }

    public String getPath() {
        return this.path;
    }
}
