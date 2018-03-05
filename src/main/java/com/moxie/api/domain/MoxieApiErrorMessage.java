package com.moxie.api.domain;

import java.net.URI;
import java.util.Collections;

public class MoxieApiErrorMessage  extends MoxieErrorMessage {

    public static final URI DEFAULT_TYPE = URI.create("about:blank");

    private final MoxieErrorInfoList errors = new MoxieErrorInfoList();

    public MoxieApiErrorMessage() {
        this.setType(DEFAULT_TYPE);
    }

    public MoxieApiErrorMessage(String title, Integer status, String detail) {
        this.setType(DEFAULT_TYPE);
        this.setTitle(title);
        this.setStatus(status);
        this.setDetail(detail);
    }

    public void addErrorInfo(MoxieErrorInfo... errorInfos) {
        Collections.addAll(this.errors, errorInfos);
    }

    public MoxieErrorInfoList getErrors() {
        return this.errors;
    }
}
