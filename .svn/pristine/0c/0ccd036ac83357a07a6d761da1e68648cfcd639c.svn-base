package com.moxie.api;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.moxie.api.domain.Authorization;
import com.moxie.api.domain.MoxieApiException;
import com.moxie.api.http.HttpClient;
import com.moxie.api.http.HttpClientConfig;
import com.moxie.api.http.HttpMethod;
import org.apache.http.HttpStatus;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CarrierAuthTest {

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
        initHttpClient();

        System.out.print("请输入11位手机号码:");
        Scanner scanner = new Scanner(System.in);
        String account = "15869001094";
        System.out.print("请输入服务密码:");
        String password = "319804";
        System.out.print("请输入用户识别码:");
        String userId = "1";
        System.out.print("请输入用户在营业厅注册时，预留的姓名:");
        String realName = "李扬";
        System.out.print("请输入用户在营业厅注册时，预留的身份证号码:");
        String idCard = "21010219790916471X";

        String taskId =testCreateTask(account, password, userId, realName, idCard);

        while (taskStatus(taskId, 120 * 1000)) {
            System.out.println("再次获取验证码(Y/N):");
            String flag = scanner.nextLine();
            if ("Y".equalsIgnoreCase(flag)) {
                testGetVerifyCode(taskId, "sms");
            }

            String result = scanner.nextLine();
            if (result != null) {
                // 输入图片/短信验证码处理逻辑
                testInputTask(taskId, result);
            }
        }
    }

    /**
     * 1. 获取手机号码通道信息
     */
    public void testGetChannels() {

        String url = "https://api.51datakey.com/carrier/v3/tasks/channels";
        String bizContent = "{\"account\":\"181162733232\"}";

        MoxieRequest moxieRequest = MoxieRequest.custom().setBizContent(bizContent)
                .setResponseClass(MoxieResponse.class).build();
        MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());

        System.out.println(String.format(">>> 调用魔蝎URL: %s, 请求参数: %s", url, bizContent));
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
        if (response.isSuccess()) {
            // TODO 接口调用正常,解析结果响应参数
            System.out.println("String carrier = " + object.getString("carrier"));
            System.out.println("String carrierName = " + object.getString("carrier_name"));
            System.out.println("String province = " + object.getString("province"));
            System.out.println("String status = " + object.getIntValue("status"));
            JSONArray jsonArray = object.getJSONArray("channels");

            for (int i= 0; i < jsonArray.size(); i++) {
                System.out.println("...index = " + i);
                JSONObject subObject = JSON.parseObject(String.valueOf(jsonArray.get(i)));
                System.out.println("String channel = " + subObject.getString("channel"));
                System.out.println("String channelName = " + subObject.getString("channel_name"));
                System.out.println("String realNameRequired = " + subObject.getString("real_name_required"));
                System.out.println("String resetPwdSms = " + subObject.getString("reset_pwd_sms"));
                System.out.println("String loginSmsRequired = " + subObject.getString("login_sms_required"));
            }
        } else {
            // TODO 接口调用正常, 解析异常信息
            System.out.println("String detail = " + object.getString("detail"));
            System.out.println("String instance = " + object.getString("instance"));
        }
    }

    /**
     * 2. 创建运营商采集任务
     */
    public static String testCreateTask(String account, String password, String userId,
                                      String realName, String idCard) {
        String url = "https://api.51datakey.com/carrier/v3/tasks";

        String bizContent = "" +
                "{\"account\":\""+account+"\"," +
                "\"password\":\""+password+"\"," +
                "\"user_id\":\""+userId+"\"," +
                "\"origin\":\"2\"," +
                "\"real_name\":\""+realName+"\"," +
                "\"id_card\":\""+idCard+"\"}";

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
            return "";
        }

        System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());
        JSONObject object = JSON.parseObject(response.getResponseData());
        if (response.isSuccess()) {
            // TODO 接口调用正常,解析结果响应参数
            String taskId = object.getString("task_id");
            System.out.println("String taskId = " + taskId);
            return taskId;
        } else {
            // TODO 接口调用正常, 解析异常信息
            System.out.println("String detail = " + object.getString("detail"));
            System.out.println("String instance = " + object.getString("instance"));
            return "";
        }
    }

    /**
     * 3.  输入图片/短信验证码
     */
    public static void testInputTask(String taskId, String result) {
        String url = "https://api.51datakey.com/carrier/v3/tasks/" + taskId + "/input";
        String bizContent = "{\"input\":\""+result+"\"}";

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
    }

    /**
     * 轮询任务执行状态
     *
     * @param taskId
     * @param timeoutMillis
     */
    private static boolean taskStatus(String taskId, long timeoutMillis) {

        String url = "https://api.51datakey.com/carrier/v3/tasks/" + taskId + "/status-ex";
        MoxieRequest moxieRequest = MoxieRequest.custom().setResponseClass(MoxieResponse.class).build();

        // 轮询任务状态处理逻辑
        long startTime = System.currentTimeMillis();
        while (true) {
            if (System.currentTimeMillis() - startTime > timeoutMillis) {  // 超过{timeoutMillis}秒，退出；可根据实际业务情况调整
                // TODO 轮询任务状态, 在规定时间内未返回结果, 引导用户重新申请
                return false;
            }

            try {
                Thread.sleep(2000); // 休眠2秒
            } catch (InterruptedException e) {
                // ignore
            }

            System.out.println(String.format(">>> 调用魔蝎URL: %s", url));
            MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
            MoxieResponse response = null;
            try {
                response = moxieClient.execute(moxieRequest, HttpMethod.GET);
            } catch (Exception e) {
                // TODO 调用接口异常, 打印异常日志并记录异常信息, 此异常逻辑忽略
                MoxieApiException moxieApiException = new MoxieApiException(e);
                System.out.println("调用魔蝎接口异常: " + moxieApiException.getMessage());
            }

            if (response == null) continue;

            System.out.println("调用魔蝎接口, 响应码: " + response.getResponseCode() + ", 响应结果: " + response.getResponseData());

            JSONObject object = JSON.parseObject(response.getResponseData());
            if (!response.isSuccess()) {
                String errorDesc = object.getString("detail");      // 获取异常信息
                System.out.println("调用魔蝎接口:" + errorDesc);
                if (HttpStatus.SC_NOT_FOUND == response.getResponseCode()) {
                    // TODO 轮询任务状态返回结果不存在, 引导用户重新申请
                    return false;
                }
                // TODO 轮询任务状态返回结果异常, 打印异常信息, 继续轮询
                continue;
            }

            String description = object.getString("description");       //  描述
            String phaseType = object.getString("phase_type");          //  阶段类型
            Boolean canLeave = object.getBoolean("can_leave");          //  授权登录退出标识
            String phaseStatus = object.getString("phase_status");      //  阶段状态
            String errorCode = object.getString("error_code");          //  错误码

            // TODO 预留内部错误码转换, 可根据errorCode转换内部错误码

            if (phaseStatus.equalsIgnoreCase("WAIT_CODE")) {
                JSONObject inputObject = object.getJSONObject("input");
                String type = inputObject.getString("type");
                System.out.print(description);
                if (type.equalsIgnoreCase("SMS")) {
                    Long waitSeconds = inputObject.getLong("wait_seconds");
                    // TODO: 引导用户输入短信验证码处理逻辑, 退出
                    System.out.print("请输入短信验证码:");
                } else if (type.equalsIgnoreCase("IMG")) {
                    String value = inputObject.getString("value");
                    // TODO: 引导用户输入图片验证码处理逻辑, 退出
                    System.out.print("请输入图片验证码:");
                } else {
                    // TODO: 预留扩展
                }
                return true;
            } else if (phaseStatus.equalsIgnoreCase("DONE_FAIL") || phaseStatus.equalsIgnoreCase("DONE_TIMEOUT")) {
                //: TODO 任务登录失败，获取“description”信息，引导用户重新授权
                System.out.print(description + ", 退出");
                return false;
            } else if (canLeave) {
                //: TODO 任务授权成功，退出与用户交互，等待魔蝎异步回调通知
                System.out.print("任务授权成功，退出与用户交互，等待魔蝎异步回调通知，退出");
                return false;
            }
        }
    }

    private static void testGetVerifyCode(String taskId, String type) {

        String url = "https://api.51datakey.com/carrier/v3/tasks/" + taskId + "/verifycode";
        String bizContent = "{\"type\":\""+ type +"\"}";

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
            // TODO 轮询任务状态返回结果不存在, 引导用户重新申请
            return;
        }

        String description = object.getString("description");       //  描述
        String phaseType = object.getString("phase_type");          //  阶段类型
        Boolean canLeave = object.getBoolean("can_leave");          //  授权登录退出标识
        String phaseStatus = object.getString("phase_status");      //  阶段状态
        String errorCode = object.getString("error_code");          //  错误码
        System.out.println(description);
        if (phaseStatus.equalsIgnoreCase("WAIT_CODE") && errorCode.equalsIgnoreCase("0")) {
            // TODO: 解析响应报文，判断"input"元素，显示"description"和倒计时,引导用户输入验证码或超时重新获取
            JSONObject inputObject = object.getJSONObject("input");
            String value = inputObject.getString("value");
            System.out.print("请输入验证码:");
        } else if (phaseStatus.equalsIgnoreCase("WAIT_CODE") && !phaseStatus.equalsIgnoreCase("0")) {
            // TODO: 解析响应报文，判断"input"元素，显示"description",引导用户重新获取
            JSONObject inputObject = object.getJSONObject("input");
            String value = inputObject.getString("value");
            System.out.print("请输入验证码:");
        } else if (phaseStatus.equalsIgnoreCase("DONE_FAIL")) {
            // TODO: 此种情况，接口逻辑调用不正确，退出任务，引导用户重新授权
        } else {
            // TODO: 此种情况，显示"description"，不做任何逻辑处理
        }
    }

    public String mxDateMobile(String mobile, String taskId) {

        initHttpClient();

        String url = "https://api.51datakey.com/carrier/v3/mobiles/"+mobile+"/mxdata";

        Map<String, String> params = new HashMap<String, String>();
        params.put("task_id", taskId);
        MoxieRequest moxieRequest = MoxieRequest.custom()
                .setResponseClass(MoxieResponse.class)
                .setParams(params)
                .build();
        System.out.println(String.format(">>> 调用魔蝎URL: %s", url));
        System.out.println(String.format(">>> 调用魔蝎URL: %s", httpClient));
        System.out.println(String.format(">>> 调用魔蝎URL: %s", authorization.getApiKey()));
        System.out.println(String.format(">>> 调用魔蝎URL: %s", authorization.getApiKey()));

        MoxieClient moxieClient = new DefaultMoxieClient(httpClient, url, authorization.getApiKey());
        MoxieResponse response = null;

        try {
            response = moxieClient.execute(moxieRequest, HttpMethod.GET);
            System.out.println("========"+response);
        } catch (Exception e) {
            // TODO: handle exception
        }

        JSONObject object = JSON.parseObject(response.getResponseData());
        if (!response.isSuccess()) {
            String errorDesc = object.getString("detail");      // 获取异常信息
            System.out.println("调用魔蝎接口:" + errorDesc);
            if (HttpStatus.SC_NOT_FOUND == response.getResponseCode()) {
                // TODO 轮询任务状态返回结果不存在, 引导用户重新申请
                return "";
            }
            // TODO 轮询任务状态返回结果异常, 打印异常信息, 继续轮询
        }

        return null;

    }
}
