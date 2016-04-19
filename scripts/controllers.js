angular.module('app')

.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {


    $scope.items = [
      {path: '/menu', title: 'Menu'},
      {path: '/', title: 'SushiSan'}
    ];

    $scope.isActive = function(item) {
      if (item.path == $location.path()) {
        
        return true;
      }

        return false;
    };

  }])

.controller('CarouselCtrl', ['$scope', function($scope) {


  $scope.viewLoaded=function(){
 $('.carousel ').carousel()
}

  

  }])

.controller('homeController', function() {


  })


.controller("MainController", function(dataService, $anchorScroll, $location, $scope){

 var vm = this;

 dataService().then(function(data) {
   vm.productos = data;
  });

$scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }


});







