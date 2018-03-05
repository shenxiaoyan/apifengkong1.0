package com.moxie.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.moxie.api.domain.Authorization;
import com.moxie.api.domain.MoxieApiException;
import com.moxie.api.http.HttpClient;
import com.moxie.api.http.HttpClientConfig;
import com.moxie.api.http.HttpMethod;

public class CarrierResetPwdTest {

    private static HttpClient httpClient;

    private static Authorization authorization;

    public static void initHttpClient() {
        HttpClientConfig httpClientConfig = HttpClientConfig.custom().setMaxTotal(100).setDefaultMaxPerRoute(2)
                .setConnectTimeout(30 * 100).setConnectionRequestTimeout(30 * 100).setSocketTimeout(30 * 100).build();
        httpClient = new HttpClient(httpClientConfig.getRequestConfig(), httpClientConfig.getPool());

        authorization = Authorization.AuthorizationBuilder.newBuilder()
                .withApiKey("apikey 00a4be26195d4856965c5293629b84b2")
                .withToken("token 2c231457676c4a6d80c3a0b6be83fd5a")
                .build();
    }

    public static void main(String args[]) {

    }

    /**
     * 申请验证码重置
     */
    private static void testResetPwd() {

        String url = "https://api.51datakey.com/carrier/v3/tasks/reset";
        String bizContent = "{\"account\":\"18116273323\"," +
                "\"user_id\":\"23456234544345\"," +
                "\"real_name\":\"张三\"," +
                "\"id_card\":\"123456789012345678\"}";

        System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
        MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent).setResponseClass(MoxieResponse.class).build();
        MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
        MoxieResponse response;
        try {
            response = moxieClient.execute(moxieRequest, HttpMethod.POST);
        } catch (Exception e) {
            // TODO 接口调用异常, 解析异常信息
            MoxieApiException moxieApiException = new MoxieApiException(e);
            System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
            return;
        }

        System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
        JSONObject object = JSON.parseObject(response.getResponseData());
        if (!response.isSuccess()) {
            String errorDesc = object.getString("detail");      // 获取异常信息
            System.out.println("调用魔蝎接口:" + errorDesc);
            return;
        }

        String description =  object.getString("description");
        Boolean finished = object.getBoolean("finished");
        String errorCode = object.getString("error_code");
        // 接口服务调用正常，获取响应报文体，转换正常模型
        if (finished && !errorCode.equalsIgnoreCase("0")) {
            // TODO 异常情况，退出重置服务密码逻辑，获取“description”描述信息，重新引导用户重置服务密码
        } else if (!finished) {
            // TODO 正常情况，获取需要用户输入的信息，获取“description”描述信息，前端展示引导用户输入（需要与用户交互处理逻辑）
        } else {
            // TODO 正常情况，不需要用户再次输入任何信息，获取“description”描述信息，重置服务密码直接成功 （此种情况，暂未出现）
        }
    }

    /**
     * 提交验证信息
     * @param taskId
     */
    private static void testResetPwdSubmit(String taskId) {

        String url = "https://api.51datakey.com/carrier/v3/tasks/reset/" + taskId + "/input";
        String bizContent = "{\"type\":\"SUBMIT\",\"inputs\":[{\"type\":\"sms\",\"value\":\"123123\"},{\"type\":\"pwd\",\"value\":\"123123\"}]}";

        System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
        MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent).setResponseClass(MoxieResponse.class).build();
        MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
        MoxieResponse response;
        try {
            response = moxieClient.execute(moxieRequest, HttpMethod.POST);
        } catch (Exception e) {
            // TODO 接口调用异常, 解析异常信息
            MoxieApiException moxieApiException = new MoxieApiException(e);
            System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
            return;
        }

        System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
        JSONObject object = JSON.parseObject(response.getResponseData());
        if (!response.isSuccess()) {
            String errorDesc = object.getString("detail");      // 获取异常信息
            System.out.println("调用魔蝎接口:" + errorDesc);
            return;
        }

        Boolean finished = object.getBoolean("finished");
        // 接口服务调用正常，获取响应报文体，转换正常模型
        if (finished) {
            // TODO 获取“description”描述信息，提示用户服务密码重置结果
        } else {
            // TODO 获取需要用户输入的信息，获取“description”描述信息，前端展示引导用户输入（需要与用户交互处理逻辑）
        }
    }

    /**
     * 再次获取验证码,独立于服务密码重置流程
     *
     * @param taskId
     */
    public static void testResetPwdResend(String taskId) {
        String url = "https://api.51datakey.com/carrier/v3/tasks/reset/" + taskId + "/input";
        String bizContent = "{\"type\":\"RESEND\"}";

        System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
        MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent).setResponseClass(MoxieResponse.class).build();
        MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
        MoxieResponse response;
        try {
            response = moxieClient.execute(moxieRequest, HttpMethod.POST);
        } catch (Exception e) {
            // TODO 接口调用异常, 解析异常信息
            MoxieApiException moxieApiException = new MoxieApiException(e);
            System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
            return;
        }

        System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
        JSONObject object = JSON.parseObject(response.getResponseData());
        if (!response.isSuccess()) {
            String errorDesc = object.getString("detail");      // 获取异常信息
            System.out.println("调用魔蝎接口:" + errorDesc);
            return;
        }

        Boolean finished = object.getBoolean("finished");

        // 接口服务调用正常，获取响应报文体，转换正常模型
        if (finished) {
            // TODO 异常情况，退出重置服务密码逻辑，获取“description”描述信息，重新引导用户重置服务密码
        } else {
            // TODO 正常情况，获取“description”描述信息，引导用户再次下发或等待输入验证码
        }

    }
}

