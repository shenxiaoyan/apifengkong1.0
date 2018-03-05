package com.moxie.api.util;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.zip.GZIPInputStream;

public final class GzipUtil {

    // 解压缩
    public static String uncompress(InputStream gzippedResponse) throws IOException {

        InputStream decompressedResponse = new GZIPInputStream(gzippedResponse);
        Reader reader = new InputStreamReader(decompressedResponse, "UTF-8");
        StringWriter writer = new StringWriter();

        char[] buffer = new char[10240];
        for(int length = 0; (length = reader.read(buffer)) > 0;){
            writer.write(buffer, 0, length);
        }

        writer.close();
        reader.close();
        decompressedResponse.close();
        gzippedResponse.close();

        return writer.toString();
    }

    public static void main(String[] args) throws IOException {
        /*URL url = new URL("http://localhost:9999/carrier/v3/mobiles/13666691582/basic?task_id=9932e650-99bc-11e6-9821-36fd899738d0");
//        url = new URL("https://api.51datakey.com/carrier/v3/mobiles/13373917602/call?task_id=a160ae60-bbc8-11e6-b7ca-00163e0d2629");
        url = new URL("https://api.51datakey.com/carrier/v3/mobiles/18668122978/mxdata?task_id=7032f7a0-be23-11e6-8ae0-00163e004a23");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Accept-Encoding", "gzip,deflate,sdch");
        connection.setRequestProperty("Accept", "application/json");
        connection.setRequestProperty("X-Moxie-Param", "AAAAXgQ9KE3o5BDdnXh4V73Ba4Ca7QqviQJDKOYptuB4OEi96+ViMcv18toDfcuSgDMcE2ap8Fds7SnwT3Y9h/qD1lN1Heg43R61DBsZ3/CkKh3eGurD/cojXRemKP0zOwKOpw==.QVZtaVNZVEk4eGgxUS9oMXB6RGM0OXk5RUVBeC8xT29pbU9IN2VNUWRVVE1seloxemt6UktzV29pUmVPQnZHTkY5MUlrM0ptM285Y3l4UDNPa0wwWUZrMStZK21Zck9KUGpzWVh4YVhZR3VMd2d6aUJUaVBIekphZVc4VCsvYkVsOU15YjJuMzJtendGbGpXVnE1OXV6eXVHY000WmFUREc3MllGOTRJNmg4PQ==");
        connection.setRequestProperty("Authorization", "token cb2f48f3c2a74488ad3abb52cfc4c8b6");
        connection.connect();

        System.out.println(uncompress(connection.getInputStream()));
        connection.disconnect();*/

        


    }


}
