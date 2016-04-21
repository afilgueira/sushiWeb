angular.module('app')

.controller('NavCtrl', ['$scope', '$location', function($scope, $location) 
{

	$scope.items = [
	{path: '/menu', title: 'Menu'},
	{path: '/', title: 'SushiSan'}
	];

	$scope.isActive = function(item) 
	{
		return (item.path == $location.path()) ;

	};
}])

.controller('CarouselCtrl', ['$scope', function($scope) 
{

	$scope.viewLoaded=function()
	{
		$('.carousel ').carousel()
	}

}])

.controller('homeController', function() {

})


.controller("MainController", function(dataService, $anchorScroll, $location, $scope)
{

	var vm = this;

	dataService().then(function(data) 
	{
		vm.productos = data;
	});

	$scope.scrollTo = function(id) 
	{
		$location.hash(id);
		$anchorScroll();
	}

	/*$(".nav-menu").hide();*/

	var  mn = $(".nav-menu");
	var  contenido = $("#contenido");

    mns = "main-nav-scrolled";
    hdr = 343;

	$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
  	/*mn.show();*/
    mn.addClass(mns);
    contenido.addClass('sticky-active');
    $(".nav-desc").hide();

      } else {
  	/*mn.hide();*/
    mn.removeClass(mns);
    contenido.removeClass('sticky-active');
    $(".nav-desc").show();

  }
	})

});







