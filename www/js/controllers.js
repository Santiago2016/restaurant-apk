/**
 * Created by Camilo on 27/11/2016.
 */
angular.module('starter.controllers', [])
  .controller('InicioCtrl', function ($scope, $ionicLoading, $state, $stateParams) {
    $scope.loading = true;
    $scope.category = false;
    $scope.mostrar = true;
    var valido = true;
    $scope.show = function () {
      setTimeout(function () {
        $ionicLoading.show({
          template: 'Cargando...'
        }).then(function () {
          if (valido) {
            $scope.loading = false
            $scope.category = true;
            $scope.mostrar = false;
            $scope.hide();
          } else {
            $state.go('conexion');
            $scope.hide();
          }
        });
      }, 3000);
    };
    // $scope.show = function () {
    //   $ionicLoading.show({
    //     template: 'Cargando...',
    //     duration: 3000
    //   }).then(function () {
    //       $scope.category = true;
    //       $scope.hide();
    //   });
    // };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.go = function (valor) {
      if (valor == 'ensaladas') {
        $state.go('ensalada');
      } else if (valor == 'bebidas') {
        $state.go('bebidas');
      } else if (valor == 'platofuerte') {
        $state.go('platofuerte');
      } else {
        $state.go('postres');
      }

    }
  })
  .controller('MenuCtrl', function ($scope, Chats, $ionicModal, $ionicPopup) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    $scope.showPopup = function () {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="number" ng-model="data.ctd">' +
        '<ul class="list">' +
        '<li class="item item-toggle">' +
        'Para llevar' +
        '<label class="toggle toggle-assertive">' +
        '<input type="checkbox" ng-model="data.llevar">' +
        '<div class="track">' +
        '<div class="handle"></div>' +
        '</div>' +
        '</label>' +
        '</li>' +
        '</ul>',
        title: 'Hacer pedido',
        subTitle: 'Entre cuanto quiere',
        scope: $scope,
        buttons: [
          {text: 'Cancelar'},
          {
            text: '<b>Enviar</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.ctd) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                if (!$scope.data.llevar) {
                  return $scope.data.ctd;
                } else {
                  return $scope.data.ctd + ' Para llevar';
                }
              }
            }
          }
        ]
      });

      myPopup.then(function (res) {
        console.log('Tapped!', res);
      });

      $timeout(function () {
        myPopup.close(); //close the popup after 3 seconds for some reason
      }, 3000);
    };

    // An alert dialog
    $scope.showAlert = function (name, face, lastText, detail) {
      var alertPopup = $ionicPopup.alert({
        title: name,
        template: '<div class="list card"><div class="item item-body"><img class="full-image" ng-src="' + face + '"/><p>' + detail + '</p></div></div>',
        buttons: [
          {
            text: 'Aceptar',
            type: 'button-positive'
          },
        ]
      });

      alertPopup.then(function (res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })
  .controller('LoadingCtrl', function ($scope, $state) {
    $scope.message = 'Ha habido problemas de conexión';
    $scope.validar = function () {
      $state.go('inicio');
    }
  });
