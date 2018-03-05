package com.moxie.api.domain;

public class MoxieApiException extends RuntimeException {

    private MoxieApiErrorMessage errorMessage;

    public MoxieApiException(MoxieApiErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }

    public MoxieApiException(MoxieApiErrorMessage errorMessage, Throwable e) {
        super(e);
        this.errorMessage = errorMessage;
    }

    public MoxieApiException(Throwable e) {
        super(e);
    }

    public MoxieApiErrorMessage getErrorMessage() {
        return this.errorMessage;
    }

    public void setErrorMessage(MoxieApiErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
    }
}
