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
      precio2:"@"
    },
    templateUrl: 'templates/roll.html'
  }
})

.directive('loader', function(){

  return {
    templateUrl: '/templates/loader.html',
    scope:true
  };
})


.directive('twoColLoader', function(){
  return {
    templateUrl: '/templates/twoColLoader.html',
    scope:true
  };
})

.directive('column', function () {
  return {
    templateUrl: '/templates/column.html',
    transclude : true,
    scope: false
  };
})

.directive('anchorSmoothScroll', function($location) {
  'use strict';

  return {
      restrict: 'A',
      replace: false,
      scope: {
          'anchorSmoothScroll': '@'
      },
      link: function($scope, $element, $attrs) {
        initialize();
        function initialize() {
          createEventListeners();
        }

        function createEventListeners() {
          $element.on('click', function() {
              $location.hash($scope.anchorSmoothScroll);
              scrollTo($scope.anchorSmoothScroll);
          });
        }

        function scrollTo(eID) {
          var i;
          var startY = currentYPosition();
          var stopY = elmYPosition(eID) - 100;
          var distance = stopY > startY ? stopY - startY : startY - stopY;
          var speed = Math.round(distance / 100);
          if (speed >= 20) speed = 20;
          var step = Math.round(distance / 25);
          var leapY = stopY > startY ? startY + step : startY - step;
          var timer = 0;
          if (stopY > startY) {
            for (i = startY; i < stopY; i += step) {
              setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
              leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
          }
          for (i = startY; i > stopY; i -= step) {
            setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
          }
        }

        function currentYPosition() {
          if (window.pageYOffset) {
            return window.pageYOffset;
          }
          if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
          }
          if (document.body.scrollTop) {
            return document.body.scrollTop;
          }
          return 0;
        }

        function elmYPosition(eID) {
          var elm = document.getElementById(eID);
          var y = elm.offsetTop;
          var node = elm;
          while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
          } return y;
        }
    }
  };
});




