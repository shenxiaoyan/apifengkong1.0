package com.moxie.api;

import java.io.Serializable;
import java.util.Map;

/**
 * 魔蝎响应报文结构体
 */
public class MoxieResponse implements Serializable {

    private static final long serialVersionUID = 5014379068811962022L;

    /**
     * Http 响应状态码
     */
    private int responseCode = 200;

    /**
     * 业务响应报文体
     */
    private String responseData;

    /**
     * 扩展字段
     */
    private Map<String, String> params;

    public int getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(int responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseData() {
        return responseData;
    }

    public void setResponseData(String responseData) {
        this.responseData = responseData;
    }

    public Map<String, String> getParams() {
        return params;
    }

    public void setParams(Map<String, String> params) {
        this.params = params;
    }

    /**
     * 判断接口调用是否成功
     *
     * @return true: 成功    false: 异常
     */
    public boolean isSuccess() {
        return responseCode >= 200 && responseCode < 300;
    }
}
