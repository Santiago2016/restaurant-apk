// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('inicio',{
        url: '/inicio',
        templateUrl: 'templates/inicio.html',
        controller: 'InicioCtrl'
      })
      .state('ensalada',{
        url: '/ensalada',
        templateUrl: 'templates/ensalada.html',
        controller: 'MenuCtrl'
      })
      .state('postres',{
        url: '/postres',
        templateUrl: 'templates/postres.html',
        controller: 'MenuCtrl'
      })
      .state('platofuerte',{
        url: '/platofuerte',
        templateUrl: 'templates/platofuerte.html',
        controller: 'MenuCtrl'
      })
      .state('bebidas',{
        url: '/bebidas',
        templateUrl: 'templates/bebidas.html',
        controller: 'MenuCtrl'
      })
      .state('conexion', {
        url: '/conexion',
        templateUrl: 'templates/conexion.html',
        controller: 'LoadingCtrl'
      });

    $urlRouterProvider.otherwise('/inicio');
  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
