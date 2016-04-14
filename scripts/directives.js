angular.module("app") 


.directive('footer', function () { 
    return {
    restrict: 'A',
    templateUrl: '/templates/footer.html',
    scope: true,    
    transclude : false
    };
})


.directive('header', function () { 
    return {
    restrict: 'A',
    templateUrl: '/templates/header.html',
    scope: true,    
    transclude : false
    };
});


