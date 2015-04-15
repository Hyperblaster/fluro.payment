angular.module('fluro.payment',['fluro.config'])

'use strict';
angular.module('fluro.payment')

.service('FluroPaymentService', function($http, Fluro) {

    var controller = {};

    //////////////////////////

    //Submit and send back the user
    controller.makePayment = function(details) {

        //Auth Login URL
        return $http.post(Fluro.apiURL + '/payment/create', details);
    };

    //////////////////////////

    //Submit and send back the user
    controller.purchaseProduct = function(details) {

        //Auth Login URL
        return $http.post(Fluro.apiURL + '/payment/purchase', details);
    };

    //////////////////////////

    return controller;

});