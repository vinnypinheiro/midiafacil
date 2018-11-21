package br.com.solutis.desafio.report;

import br.com.solutis.desafio.helper.PropertiesReader;
import ch.qos.logback.classic.db.SQLBuilder;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.sql.*;
import java.util.HashMap;

/**
 * Created by Fabricio on 22/10/2017.
 */
public abstract class Report {
    String sql = "";


    public ResponseEntity<byte[]> print(String reportName,long id){
        ResponseEntity<byte[]> myResponse = null;
        HashMap<String,Object> parametros = getParametros();
        JasperPrint print = null;
        try {
            ResultSet dados = getDataById(id);
            int size = 1;
            while (dados.next()) {
                size++;
            }
            dados.beforeFirst();
            if(size > 0) {
                InputStream template = ReportManager.class.getResourceAsStream(reportName + ".jasper");
                // compile the report from the stream
                JasperReport report = (JasperReport) JRLoader.loadObject(template);
                // fill out the report into a print object, ready for export.

                print = JasperFillManager.fillReport(report, parametros, new JRResultSetDataSource(dados));
            }else{
                InputStream template = ReportManager.class.getResourceAsStream( "BlankReport.jasper");
                // compile the report from the stream
                JasperReport report = (JasperReport) JRLoader.loadObject(template);
                // fill out the report into a print object, ready for export.

                print = JasperFillManager.fillReport(report, parametros, new JREmptyDataSource());
            }
            // export it!
            //File pdf = File.createTempFile("output.", ".pdf");
            ByteArrayOutputStream os = new ByteArrayOutputStream();
            JasperExportManager.exportReportToPdfStream(print, os);


            byte[] contents = (os.toByteArray());

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("application/pdf"));
            //String filename = "Relatorio.pdf";
            //headers.setContentDispositionFormData(filename, filename);
            headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
            myResponse = new ResponseEntity<byte[]>(contents, headers, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return myResponse;

    }
    public  abstract HashMap<String,Object>getParametros();


    public ResultSet getDataById(Long id){
        buildSqlWithId(id);
        Connection conn = getConnection();
        Statement stmt = null;
        try {
            stmt = conn.createStatement( ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet rs = stmt.executeQuery(sql);
            return rs;
        }catch(Exception e){
            e.printStackTrace();
        }
        finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static Connection getConnection(){
        // JDBC driver name and database URL
        String JDBC_DRIVER = PropertiesReader.get("spring.datasource.driver-class-name");
        String DB_URL = PropertiesReader.get("spring.datasource.url");

        //  Database credentials
        String USER = PropertiesReader.get("spring.datasource.username");
        String PASS = PropertiesReader.get("spring.datasource.password");


        Connection conn = null;
        Statement stmt = null;
        try {
            return DriverManager.getConnection(DB_URL, USER, PASS);
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }


    public  abstract void  buildSqlWithId(Long id);

}
