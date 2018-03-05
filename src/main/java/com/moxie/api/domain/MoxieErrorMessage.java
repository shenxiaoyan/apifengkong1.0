package com.moxie.api.domain;

import java.net.URI;

public class MoxieErrorMessage {
    private URI type;
    private String title;
    private Integer status;
    private String detail;
    private URI instance;

    public MoxieErrorMessage() {
    }

    public URI getType() {
        return this.type;
    }

    public String getTitle() {
        return this.title;
    }

    public Integer getStatus() {
        return this.status;
    }

    public String getDetail() {
        return this.detail;
    }

    public URI getInstance() {
        return this.instance;
    }

    public void setType(URI type) {
        this.type = type;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public void setInstance(URI instance) {
        this.instance = instance;
    }

    public String toString() {
        return "MoxieErrorMessage(type=" + this.getType() + ", title=" + this.getTitle() + ", status=" + this.getStatus() + ", detail=" + this.getDetail() + ", instance=" + this.getInstance() + ")";
    }
}
