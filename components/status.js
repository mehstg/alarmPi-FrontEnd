(function(){
  angular.module('status', [])
  .controller('StatusCtrl', ['$scope', '$http', '$q', function($scope, $http, $q){

  function _getStatus(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://127.0.0.1:5000/api/v1.0/getState'
    }).
    success(function(data,status,headers,config){
      deferred.resolve(data);

    }).error(function(data,status,headers,config){
       deferred.reject('Error accessing web service');

    });



    return deferred.promise
  }

  function _setStatus(data){
      $scope.alarmSystem = data;

  }

  function _handleError(err){
      $scope.errorMessage = err;

  }

  _getStatus().then(_setStatus, _handleError);


  }]);



}.call(this));
