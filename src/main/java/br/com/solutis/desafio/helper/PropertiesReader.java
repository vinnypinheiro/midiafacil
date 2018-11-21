package br.com.solutis.desafio.helper;

/**
 * Created by Fabricio on 22/10/2017.
 */

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesReader {

    public static String get(String propertie) {

        Properties prop = new Properties();
        InputStream input = null;

        try {

            input = new FileInputStream("/" + getAplicationPath() + "/src/main/resources/application.properties");

            // load a properties file
            prop.load(input);
            return prop.get(propertie).toString();
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return "";
    }


    public static String getAplicationPath() {
        PropertiesReader propertiesReader = new PropertiesReader();
        String path = "/" + propertiesReader.getClass().getResource("").getPath();
        path = path.substring(0, path.length() - 1);

        path = path.substring(1, path.indexOf("midiafacil/"));
        path += "midiafacil/";

        return path;
    }

    public static void main(String[] args) {
        getAplicationPath();
    }
}
