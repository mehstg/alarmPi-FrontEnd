(function() {
  angular.module('statusApp', ['ngRoute', 'status'])
  .config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'components/status.html',
    controller: 'StatusCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  }]);




}.call(this));
