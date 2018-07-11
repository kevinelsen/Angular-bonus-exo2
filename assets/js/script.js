var app = angular.module('testApp', []);
app.controller('boopCtrl', function ($scope){
   $scope.doAlert = function(alert){
    window.alert('bonjour');
 };
});
