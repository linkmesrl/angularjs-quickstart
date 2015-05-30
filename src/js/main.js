'use strict';

angular.module('groceryStore',['ngRoute','uiGmapgoogle-maps'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
      }).
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);