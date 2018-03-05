package com.moxie.api.http;

public class HttpResponse {

    private boolean isSucceed;

    private int responseCode;

    private String errorBuffer;

    private String responseData;

    public boolean isSucceed() {
        return responseCode >= 200 && responseCode < 300;
    }

    public void setSucceed(boolean succeed) {
        isSucceed = succeed;
    }

    public int getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(int responseCode) {
        this.responseCode = responseCode;
    }

    public String getErrorBuffer() {
        return errorBuffer;
    }

    public void setErrorBuffer(String errorBuffer) {
        this.errorBuffer = errorBuffer;
    }

    public String getResponseData() {
        return responseData;
    }

    public void setResponseData(String responseData) {
        this.responseData = responseData;
    }
}
