package com.moxie.api;

import java.util.Map;

public class MoxieRequest {

    private String bizContent;

    private Map<String, String> params;

    private Class responseClass;

    public MoxieRequest(String bizContent, Map<String, String> params, Class responseClass) {
        this.bizContent = bizContent;
        this.params = params;
        this.responseClass = responseClass;
    }

    public static MoxieRequest.Builder custom() {
        return new MoxieRequest.Builder();
    }

    public static class Builder {

        private String bizContent;

        private Map<String, String> params;

        private Class responseClass;

        public MoxieRequest.Builder setBizContent(String bizContent) {
            this.bizContent = bizContent;
            return this;
        }

        public MoxieRequest.Builder setParams(Map<String, String> params) {
            this.params = params;
            return this;
        }

        public MoxieRequest.Builder setResponseClass(Class responseClass) {
            this.responseClass = responseClass;
            return this;
        }

        public MoxieRequest build() {
            return new MoxieRequest(this.bizContent, this.params, this.responseClass);
        }
    }

    public String getBizContent() {
        return bizContent;
    }

    public void setBizContent(String bizContent) {
        this.bizContent = bizContent;
    }

    public Map<String, String> getParams() {
        return params;
    }

    public void setParams(Map<String, String> params) {
        this.params = params;
    }

    public Class getResponseClass() {
        return responseClass;
    }

    public void setResponseClass(Class responseClass) {
        this.responseClass = responseClass;
    }
}
