package com.moxie.api;

public class MoxieClientException extends Exception {

    private static final long serialVersionUID = -348735758285157331L;
    private String errCode;
    private String errMsg;

    public MoxieClientException() {

    }

    public MoxieClientException(String message, Throwable cause) {
        super(message, cause);
    }

    public MoxieClientException(String message) {
        super(message);
    }

    public MoxieClientException(Throwable cause) {
        super(cause);
    }

    public MoxieClientException(String errCode, String errMsg) {
        super(errCode + ":" + errMsg);
        this.errCode = errCode;
        this.errMsg = errMsg;
    }

    public String getErrCode() {
        return this.errCode;
    }

    public String getErrMsg() {
        return this.errMsg;
    }
}