package com.moxie.api.domain;

public class Authorization {

    private String apiKey;

    private String token;

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public static class AuthorizationBuilder {

        private Authorization authorization;

        public static AuthorizationBuilder newBuilder() {
            return new AuthorizationBuilder();
        }

        public AuthorizationBuilder () {
            this.authorization = new Authorization();
        }

        public AuthorizationBuilder withApiKey(String apiKey) {
            authorization.apiKey = apiKey;
            return this;
        }

        public AuthorizationBuilder withToken(String token) {
            authorization.token = token;
            return this;
        }

        public Authorization build() {
            return authorization;
        }
    }
}
