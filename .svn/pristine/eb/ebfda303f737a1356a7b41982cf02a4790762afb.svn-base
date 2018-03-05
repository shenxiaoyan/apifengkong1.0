'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        [
            '$rootScope',
            '$state',
            '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [
            '$stateProvider',
            '$urlRouterProvider',
            'JQ_CONFIG',
            'MODULE_CONFIG',
            function ($stateProvider, $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {
                $urlRouterProvider.otherwise('/dashboard');

                // 个人风控
                $stateProvider
                // 个人真实性
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: '../company/layouts/dashboard.html',
                        resolve:load(['../admin/js/controllers/chart.js'])
                    })

                // 登录
                // $stateProvider
                // .state('access', {
                //     url: '/access',
                //     template: '<div ui-view class="fade-in-right-big smooth"></div>'
                // })
                .state('Login',{
                    url:'/Login',
                    templateUrl:'../company/layouts/Login.html'
                });
                // 工作台
                $stateProvider
                // 小金信用
                    .state('xiaojinCredit',{
                        url:'/xiaojinCredit',
                        templateUrl:'../company/layouts/workDesk/xiaojinCredit.html'
                    })
                    // 个人智能
                    .state('personalIntelligence',{
                    url:'/personalIntelligence',
                    templateUrl:'../company/layouts/workDesk/personalIntelligence.html'
                    })
                    // 企业智能
                    .state('enterpriseIntelligence',{
                        url:'/enterpriseIntelligence',
                        templateUrl:'../company/layouts/workDesk/enterpriseIntelligence.html'
                    })
                    //下载报告
                    .state('reportDownload',{
                        url:'/reportDownload',
                        templateUrl:'../company/layouts/workDesk/reportDownload.html'
                    })
                    .state('recharge',{
                        url:'/recharge',
                        templateUrl:'../company/layouts/workDesk/recharge.html'
                    })
                // 个人搜索
                .state('personalSearch',{
                    url:'/personalSearch',
                    templateUrl:'../company/layouts/workDesk/personalSearch.html'
                })
                // 企业搜索
                    .state('enterpriseSearch',{
                        url:'/enterpriseSearch',
                        templateUrl:'../company/layouts/workDesk/enterpriseSearch.html'
                    });
                $stateProvider
                    // 个人真实性
                    .state('personalAllList', {
                        url: '/personalAllList',
                        templateUrl: '../company/layouts/personal/personalAllList.html'
                    })
                     .state('personalAllNew', {
                        url: '/personalAllNew',
                        templateUrl: '../company/layouts/personal/personalAllNew.html'
                    })
                       .state('personalAllInfo', {
                        url: '/personalAllInfo/:id',
                        templateUrl: '../company/layouts/personal/personalAllInfo.html',
                        params:{id:null}
                    })
                    .state('personalReal', {
                        url: '/personalReal',
                        templateUrl: '../company/layouts/personal/personalReal.html'
                    })
                    .state('personalReal.page',{
                        url:'/{view_type}',
                        templateUrl:function ($stateParams) {
                            return '../company/entities/personal/personalReal/' + $stateParams.view_type + ".html";
                        }
                    })
                    // 个人信用
                    .state('personalCredit', {
                        url: '/personalCredit',
                        templateUrl: '../company/layouts/personal/personalCredit.html'
                    })
                    .state('personalCredit.page',{
                        url:'/{view_type}',
                        templateUrl:function ($stateParams) {
                            return '../company/entities/personal/personalCredit/' + $stateParams.view_type + ".html";
                        }
                    })
                    //个人资产
                    .state('personalAssets', {
                        url: '/personalAssets',
                        templateUrl: '../company/layouts/personal/personalAssets.html'
                    })
                    .state('personalAssets.page',{
                        url:'/{view_type}',
                        templateUrl:function ($stateParams) {
                            return '../company/entities/personal/personalAssets/' + $stateParams.view_type + ".html";
                        }
                    })
                    // 个人电商数据
                    .state('personalEconomics', {
                        url: '/personalEconomics',
                        templateUrl: '../company/layouts/personal/personalEconomics.html'
                    })
                    .state('personalEconomics.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/personal/personalEconomics/' + $stateParams.view_type + ".html";
                        }
                    });

                    // 企业
                $stateProvider
                    //企业真实性
                    .state('enterpriseReal', {
                        url: '/enterpriseReal',
                        templateUrl: '../company/layouts/enterprise/enterpriseReal.html'
                    })
                    //点击二级菜单之后的详情
                    .state('enterpriseReal.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/enterprise/enterpriseReal/' + $stateParams.view_type + ".html";
                        }
                    })
                    //企业信用
                    .state('enterpriseCredit', {
                        url: '/enterpriseCredit',
                        templateUrl: '../company/layouts/enterprise/enterpriseCredit.html'
                    })
                    //点击二级菜单之后的详情
                    .state('enterpriseCredit.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/enterprise/enterpriseCredit/' + $stateParams.view_type + ".html";
                        }
                    })
                    //财务资产
                    .state('enterpriseAssets', {
                        url: '/enterpriseAssets',
                        templateUrl: '../company/layouts/enterprise/enterpriseAssets.html'
                    })
                    //点击二级菜单之后的详情
                    .state('enterpriseAssets.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/enterprise/enterpriseAssets/' + $stateParams.view_type + ".html";
                        }
                    });

                //报表
                $stateProvider
                    //平台报表
                    .state('plantformReport', {
                        url: '/plantformReport',
                        templateUrl: '../company/layouts/plantformReports/reports.html'
                    })
                    //平台报表二级菜单
                    .state('plantformReport.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/plantformReports/' + $stateParams.view_type + ".html";
                        }
                    })
                    //公司报表
                    .state('companyReport', {
                        url: '/companyReport',
                        templateUrl: '../company/layouts/companyReports/reports.html'
                    })
                    //公司报表二级菜单
                    .state('companyReport.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/companyReports/' + $stateParams.view_type + ".html";
                        }
                    })
                    //员工报表
                    .state('employeeReport', {
                        url: '/employeeReport',
                        templateUrl: '../company/layouts/employeeReports/reports.html'
                    })
                    //员工报表二级菜单
                    .state('employeeReport.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/employeeReports/' + $stateParams.view_type + ".html";
                        }
                    })
                    //财务报表
                    .state('financeReport', {
                        url: '/financeReport',
                        templateUrl: '../company/layouts/financeReport/reports.html'
                    })
                    //财务报表二级菜单
                    .state('financeReport.page', {
                        url: '/{view_type}',
                        templateUrl: function($stateParams){
                            return '../company/entities/financeReports/' + $stateParams.view_type + ".html";
                        }
                    });


                // 管理
                $stateProvider
                //管理员工
                    .state('managementStaff', {
                        url: '/managementStaff',
                        templateUrl: '../company/layouts/management/managementStaff.html'
                    })
                    //管理财务
                    .state('managementFinance', {
                        url: '/managementFinance',
                        templateUrl: '../company/layouts/management/managementFinance.html'
                    });

                function load(srcs, callback) {
                    return {
                        deps: ['$ocLazyLoad', '$q',
                            function( $ocLazyLoad, $q ){
                                var deferred = $q.defer();
                                var promise  = false;
                                srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                                if(!promise){
                                    promise = deferred.promise;
                                }
                                angular.forEach(srcs, function(src) {
                                    promise = promise.then( function(){
                                        if(JQ_CONFIG[src]){
                                            return $ocLazyLoad.load(JQ_CONFIG[src]);
                                        }
                                        angular.forEach(MODULE_CONFIG, function(module) {
                                            if( module.name == src){
                                                name = module.name;
                                            }else{
                                                name = src;
                                            }
                                        });
                                        return $ocLazyLoad.load(name);
                                    } );
                                });
                                deferred.resolve();
                                return callback ? promise.then(function(){ return callback(); }) : promise;
                            }
                        ]
                    }
                }
            }
        ]
    );
