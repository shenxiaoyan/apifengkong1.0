// config
var app =  
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
    .config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push("httpInterceptor");
    }]);

app.factory("httpInterceptor",
    [
        "$rootScope",
        function($rootScope) {
            return {
                // request: function(config) {
                //
                // },
                // requestError: function(rejection) {
                //
                // },
                response: function(response) {
                    if(typeof response.data === "object"){
                        if(response.data.resCode){
                            if(response.data.resCode === '0000')
                                {
                                    return response;
                                }
                            else
                                {
                                    sweetAlert("",response.data.resMsg, "error");
                                }
                        }
                        else{
                            return response;
                        }
                    }
                    else{
                        return response;
                    }
                },
                responseError : function(response) {
                	return response;
                }
            };
        }
    ]
);