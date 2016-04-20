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

.directive('onlyDesc', function(){
    return {
        scope:{
            items: "=",
            categoria: "@"
        },
        templateUrl: 'templates/onlyDesc.html',
    }
})

.directive('dosPrecios', function(){
    return {
        scope:{
            items: "=",
            categoria: "@",
            precio1:"@",
            precio2:"@",
            precio3:"@"
        },
        templateUrl: 'templates/dosPrecios.html'
    }
})

.directive('roll', function(){
    return {
        scope:{
            items: "=",
            categoria: "@",
            precio1:"@",
            precio2:"@",
        },
        templateUrl: 'templates/roll.html'
    }
})

.directive('column', function () { 
    return {
    templateUrl: '/templates/column.html',  
    transclude : true
    };
});




