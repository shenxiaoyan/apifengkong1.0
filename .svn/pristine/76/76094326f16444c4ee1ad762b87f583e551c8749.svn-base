package com.moxie.api.util;

import org.apache.commons.codec.binary.Base64;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class SignUtils {

    public static String base64Hmac256(String secret, String payload) {
        try {
            Mac sha256Hmac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes("UTF-8"), "HmacSHA256");
            sha256Hmac.init(secretKey);
            return Base64.encodeBase64String(sha256Hmac.doFinal(payload.getBytes("UTF-8")));
        } catch (Exception ignored) {
            return "";
        }
    }
}
