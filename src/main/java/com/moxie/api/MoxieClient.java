package com.moxie.api;

import com.moxie.api.http.HttpMethod;

public interface MoxieClient {

    <T extends MoxieResponse> T execute(MoxieRequest paramMoxieRequest, HttpMethod httpMethod) throws Exception;

}
