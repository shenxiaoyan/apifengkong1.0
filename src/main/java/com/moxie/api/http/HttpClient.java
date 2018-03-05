package com.moxie.api.http;

import com.moxie.api.util.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpRequestRetryHandler;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map;

public class HttpClient {

    // utf-8字符编码
    public static final String CHARSET_UTF_8 = "utf-8";

    // HTTP内容类型。相当于form表单的形式，提交数据
    public static final String CONTENT_TYPE_FORM_URL = "application/x-www-form-urlencoded";

    // HTTP内容类型
    public static final String CONTENT_TYPE_JSON_URL = "application/json;charset=utf-8";

    private CloseableHttpClient closeableHttpClient;

    private PoolingHttpClientConnectionManager pool;

    public HttpClient(RequestConfig requestConfig, PoolingHttpClientConnectionManager pool) {
        this.pool = pool;
        closeableHttpClient = HttpClients.custom()
                // 设置连接池管理
                .setConnectionManager(pool)
                // 设置请求配置
                .setDefaultRequestConfig(requestConfig)
                // 设置重试次数
                .setRetryHandler(new DefaultHttpRequestRetryHandler(0, false))
                .build();
    }

    public void shutdown() {
        if (null != pool) {
            pool.close();
        }
        if (null != closeableHttpClient) {
            try {
                closeableHttpClient.close();
            } catch (IOException e) {
                // ignore
            }
        }
    }

    /**
     * 发送 get请求
     *
     * @param httpUrl
     */
    public HttpResponse sendHttpGet(String httpUrl, Map<String, String> headers) throws IOException {
        // 创建get请求
        HttpGet httpGet = new HttpGet(httpUrl);
        for (Map.Entry<String, String> header : headers.entrySet()) {
            httpGet.setHeader(header.getKey(), header.getValue());
        }
        return sendHttpGet(httpGet);
    }

    /**
     * 发送Get请求
     *
     * @param httpGet
     * @return
     */
    private HttpResponse sendHttpGet(HttpGet httpGet) throws IOException {
        HttpResponse httpResponse = new HttpResponse();
        CloseableHttpResponse response = null;
        try {
            response = closeableHttpClient.execute(httpGet);         // 执行请求
            HttpEntity entity = response.getEntity();                                  // 得到响应实例
            String responseContent = EntityUtils.toString(entity, CHARSET_UTF_8);
            EntityUtils.consume(entity);
            httpResponse.setResponseData(responseContent);
            httpResponse.setResponseCode(response.getStatusLine().getStatusCode());
        } finally {
            release(response);
        }

        return httpResponse;
    }

    /**
     * 发送Post请求
     *
     * @param httpPost
     * @return
     */
    private HttpResponse sendHttpPost(HttpPost httpPost) throws IOException {
        HttpResponse httpResponse = new HttpResponse();
        CloseableHttpResponse response = null;
        try {
            response = closeableHttpClient.execute(httpPost); // 执行请求
            HttpEntity entity = response.getEntity();                               // 得到响应实例
            String responseContent = EntityUtils.toString(entity, CHARSET_UTF_8);
            EntityUtils.consume(entity);
            httpResponse.setResponseData(responseContent);
            httpResponse.setResponseCode(response.getStatusLine().getStatusCode());
        } finally {
            release(response);
        }

        return httpResponse;
    }

    /**
     * 发送 post请求
     *
     * @param httpUrl 地址
     */
    public HttpResponse sendHttpPost(String httpUrl, Map<String, String> headers) throws IOException {
        // 创建httpPost
        HttpPost httpPost = new HttpPost(httpUrl);
        if (null != headers) {
            for (Map.Entry<String, String> header : headers.entrySet()) {
                httpPost.setHeader(header.getKey(), header.getValue());
            }
        }
        return sendHttpPost(httpPost);
    }


    /**
     * 发送 post请求
     *
     * @param httpUrl 地址
     * @param params  参数(格式:key1=value1&key2=value2)
     */
    public HttpResponse sendHttpPost(String httpUrl, String params, Map<String, String> headers) throws IOException {
        HttpPost httpPost = new HttpPost(httpUrl);// 创建httpPost
        for (Map.Entry<String, String> header : headers.entrySet()) {
            httpPost.setHeader(header.getKey(), header.getValue());
        }

        // 设置参数
        if (params != null && params.trim().length() > 0) {
            StringEntity stringEntity = new StringEntity(params, "UTF-8");
            stringEntity.setContentType(CONTENT_TYPE_FORM_URL);
            httpPost.setEntity(stringEntity);
        }
        return sendHttpPost(httpPost);
    }

    /**
     * 发送 get请求
     *
     * @param maps 参数
     */
    public HttpResponse sendHttpGet(String httpUrl, Map<String, String> maps, Map<String, String> headers) throws IOException {
        String params = convertStringParamter(maps);
        if (!StringUtils.isEmpty(params)) {
            httpUrl = httpUrl + "?" + params;
        }
        return sendHttpGet(httpUrl, headers);
    }

    /**
     * 发送 post请求
     *
     * @param maps 参数
     */
    public HttpResponse sendHttpPost(String httpUrl, Map<String, String> maps, Map<String, String> headers) throws IOException {
        String params = convertStringParamter(maps);
        return sendHttpPost(httpUrl, params, headers);
    }


    /**
     * 发送 post请求 发送json数据
     *
     * @param httpUrl    地址
     * @param paramsJson 参数(格式 json)
     */
    public HttpResponse sendHttpPostJson(String httpUrl, String paramsJson, Map<String, String> headers) throws IOException {
        HttpPost httpPost = new HttpPost(httpUrl);// 创建httpPost
        for (Map.Entry<String, String> header : headers.entrySet()) {
            httpPost.setHeader(header.getKey(), header.getValue());
        }

        if (!StringUtils.isEmpty(paramsJson)) {      // 设置参数
            StringEntity stringEntity = new StringEntity(paramsJson, "UTF-8");
            stringEntity.setContentType(CONTENT_TYPE_JSON_URL);
            httpPost.setEntity(stringEntity);
        }
        return sendHttpPost(httpPost);
    }


    public String convertStringParamter(Map parameterMap) {
        StringBuffer parameterBuffer = new StringBuffer();
        if (parameterMap != null) {
            Iterator iterator = parameterMap.keySet().iterator();
            String key;
            String value;
            while (iterator.hasNext()) {
                key = (String) iterator.next();
                if (parameterMap.get(key) != null) {
                    value = (String) parameterMap.get(key);
                } else {
                    value = "";
                }
                parameterBuffer.append(key).append("=").append(value);
                if (iterator.hasNext()) {
                    parameterBuffer.append("&");
                }
            }
        }
        return parameterBuffer.toString();
    }

    public void release(CloseableHttpResponse response) {
        try {
            if (response != null) {     // 释放资源
                response.close();
            }
        } catch (IOException e) {
            // ignore
        }
    }
}
