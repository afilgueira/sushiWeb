angular.module("app") 

.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}])

.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   
}])

.config(function ($routeProvider) 
  { $routeProvider 
  .when("/menu", 
    { templateUrl: "/menu.html", 
    controller: "MainController as main" ,
    title: 'Sushi | Menu'
  }) 
  .when("/", 
    { templateUrl: "/sushisan.html", 
    controller: "CarouselCtrl" ,
    title: 'Sushi'
  }) 

}) ;