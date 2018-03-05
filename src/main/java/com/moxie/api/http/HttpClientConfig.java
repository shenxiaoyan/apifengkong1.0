package com.moxie.api.http;

import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.ssl.SSLContextBuilder;

import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;

public class HttpClientConfig {

    private int maxTotal;

    private int defaultMaxPerRoute;

    private int socketTimeout;

    private int connectTimeout;

    private int connectionRequestTimeout;

    // 请求配置
    private RequestConfig requestConfig;

    // 连接管理器
    private PoolingHttpClientConnectionManager pool;

    public HttpClientConfig(int maxTotal, int defaultMaxPerRoute, int socketTimeout, int connectTimeout, int connectionRequestTimeout) {
        this.maxTotal = maxTotal;
        this.defaultMaxPerRoute = defaultMaxPerRoute;
        this.socketTimeout = socketTimeout;
        this.connectionRequestTimeout = connectionRequestTimeout;
        this.connectTimeout = connectTimeout;
        initConnectionPool();
    }

    public void initConnectionPool() {
        SSLContextBuilder builder = new SSLContextBuilder();
        try {
            builder.loadTrustMaterial(null, new TrustSelfSignedStrategy());
            SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(builder.build());
            // 配置同时支持 HTTP 和 HTPPS
            Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create().register(
                    "http", PlainConnectionSocketFactory.getSocketFactory()).register(
                    "https", sslsf).build();
            // 初始化连接管理器
            pool = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
            // 将最大连接数增加到200，实际项目最好从配置文件中读取这个值
            pool.setMaxTotal(maxTotal);
            // 设置最大路由
            pool.setDefaultMaxPerRoute(defaultMaxPerRoute);

        } catch (NoSuchAlgorithmException e) {
            // ignore
        } catch (KeyStoreException e) {
            // ignore
        } catch (KeyManagementException e) {
            // ignore
        }

        requestConfig = RequestConfig.custom().setConnectionRequestTimeout(
                connectionRequestTimeout).setSocketTimeout(socketTimeout).setConnectTimeout(
                connectTimeout).build();

    }

    public static HttpClientConfig.Builder custom() {
        return new HttpClientConfig.Builder();
    }

    public static class Builder {

        private int maxTotal = 50;

        private int defaultMaxPerRoute = 2;

        private int socketTimeout = 30 * 100;

        private int connectTimeout = 30 * 100;

        private int connectionRequestTimeout = 30 * 100;

        Builder() {
        }

        public HttpClientConfig.Builder setConnectionRequestTimeout(int connectionRequestTimeout) {
            this.connectionRequestTimeout = connectionRequestTimeout;
            return this;
        }

        public HttpClientConfig.Builder setConnectTimeout(int connectTimeout) {
            this.connectTimeout = connectTimeout;
            return this;
        }

        public HttpClientConfig.Builder setSocketTimeout(int socketTimeout) {
            this.socketTimeout = socketTimeout;
            return this;
        }

        public HttpClientConfig.Builder setDefaultMaxPerRoute(int defaultMaxPerRoute) {
            this.defaultMaxPerRoute = defaultMaxPerRoute;
            return this;
        }

        public HttpClientConfig.Builder setMaxTotal(int maxTotal) {
            this.maxTotal = maxTotal;
            return this;
        }

        public HttpClientConfig build() {
            return new HttpClientConfig(this.maxTotal, this.defaultMaxPerRoute, this.connectionRequestTimeout, this.connectTimeout, this.socketTimeout);
        }
    }

    public int getMaxTotal() {
        return maxTotal;
    }

    public void setMaxTotal(int maxTotal) {
        this.maxTotal = maxTotal;
    }

    public int getDefaultMaxPerRoute() {
        return defaultMaxPerRoute;
    }

    public void setDefaultMaxPerRoute(int defaultMaxPerRoute) {
        this.defaultMaxPerRoute = defaultMaxPerRoute;
    }

    public int getSocketTimeout() {
        return socketTimeout;
    }

    public void setSocketTimeout(int socketTimeout) {
        this.socketTimeout = socketTimeout;
    }

    public int getConnectTimeout() {
        return connectTimeout;
    }

    public void setConnectTimeout(int connectTimeout) {
        this.connectTimeout = connectTimeout;
    }

    public int getConnectionRequestTimeout() {
        return connectionRequestTimeout;
    }

    public void setConnectionRequestTimeout(int connectionRequestTimeout) {
        this.connectionRequestTimeout = connectionRequestTimeout;
    }

    public RequestConfig getRequestConfig() {
        return requestConfig;
    }

    public void setRequestConfig(RequestConfig requestConfig) {
        this.requestConfig = requestConfig;
    }

    public PoolingHttpClientConnectionManager getPool() {
        return pool;
    }

    public void setPool(PoolingHttpClientConnectionManager pool) {
        this.pool = pool;
    }
}
