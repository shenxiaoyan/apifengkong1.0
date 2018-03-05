package com.moxie.api.domain;

import java.beans.ConstructorProperties;

public class MoxieErrorInfo {

    private int code;
    private String message;

    public int getCode() {
        return this.code;
    }

    public String getMessage() {
        return this.message;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String toString() {
        return "MoxieErrorInfo(code=" + this.getCode() + ", message=" + this.getMessage() + ")";
    }

    public MoxieErrorInfo() {
    }

    @ConstructorProperties({"code", "message"})
    public MoxieErrorInfo(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
