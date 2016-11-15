angular.module('quoteBook').controller('mainController', function($scope, dataService){
  $scope.thisAppisBroken = "This app is working";


  $scope.quotes = dataService.getQuotes();



})
