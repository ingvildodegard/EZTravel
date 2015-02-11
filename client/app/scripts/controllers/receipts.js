'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('eztravelApp').
	controller('ReceiptsCtrl', function ($scope, $http) {
    	$http.get("/api/receipts").success(function(response) {$scope.receipts = response;});
    	
    	$scope.setImage = function(receipt) {
            $scope.mainImageUrl = receipt;
        };
    });

