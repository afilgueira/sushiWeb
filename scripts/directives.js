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
})

.directive('combinados', function(){
    return {
        scope:{
            items: "=",
            categoria: "@"
        },
        templateUrl: 'templates/combinados.html',
    }
})

.directive('unPrecio', function(){
    return {
        scope:{
            items: "=",
            categoria: "@"
        },
        templateUrl: 'templates/unPrecio.html',
    }
})

.directive('dosPrecios', function(){
    return {
        scope:{
            items: "=",
            categoria: "@",
            precio1:"@",
            precio2:"@"
        },
        templateUrl: 'templates/dosPrecios.html',
        link: function (scope, element, attrs) {
                scope.campo1 = "Precio_" + scope.precio1 ;
                scope.campo2 = "item.Precio_" + scope.precio2 ;
            }
    }
});



