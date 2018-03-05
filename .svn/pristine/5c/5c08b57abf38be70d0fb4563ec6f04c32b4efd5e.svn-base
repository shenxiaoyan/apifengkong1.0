package com.moxie.api;

import com.moxie.api.http.HttpClient;
import com.moxie.api.http.HttpMethod;
import com.moxie.api.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

public class DefaultMoxieClient implements MoxieClient {

    private static final String CONST_AUTHORIZATION = "Authorization";

    private HttpClient httpClient;

    private String serverUrl;

    private String key;

    public DefaultMoxieClient (HttpClient httpClient, String serverUrl, String key) {
        this.httpClient = httpClient;
        this.serverUrl = serverUrl;
        this.key = key;
    }

    @Override
    public <T extends MoxieResponse> T execute(MoxieRequest paramMoxieRequest, HttpMethod httpMethod) throws Exception {

        Class clazz = paramMoxieRequest.getResponseClass();

        MoxieResponse moxieResponse = (MoxieResponse)clazz.newInstance();

        Map<String, String> headers = new HashMap<String, String>();
        headers.put(CONST_AUTHORIZATION, key);

        HttpResponse httpResponse;

        switch (httpMethod) {
            case GET:
                Map<String, String> paramsMap = paramMoxieRequest.getParams();
                httpResponse = httpClient.sendHttpGet(serverUrl, paramsMap, headers);
                break;
            case POST:
                String bizContent = paramMoxieRequest.getBizContent();
                httpResponse = httpClient.sendHttpPostJson(serverUrl, bizContent, headers);
                break;
            default:
                httpResponse = null;
                break;
        }

        moxieResponse.setResponseCode(httpResponse.getResponseCode());          // Http响应状态码
        moxieResponse.setResponseData(httpResponse.getResponseData());              // Http响应内容
        return (T) moxieResponse;
    }
}
