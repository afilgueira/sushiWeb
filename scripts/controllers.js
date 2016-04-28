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

.controller('CarouselCtrl', function($scope, dataService) 
{

	dataService();
	$scope.viewLoaded=function()
	{
		$('.carousel ').carousel()
	}

})

.controller('homeController', function() {

})


.controller("MainController", function(dataService, $anchorScroll, $location, $scope)
{

	var vm = this;

	dataService().then(function(data) 
	{	

		$scope.dataLoaded= true;
		vm.productos = data;

	});

	var  mn = $(".nav-menu");
	var  contenido = $("#contenido");



    mns = "main-nav-scrolled";
    hdr = mn.offset().top ;

	$(window).scroll(function() 
	{
	if($(this).scrollTop() > hdr) 
	  	{
	    mn.addClass(mns);
	    contenido.addClass('sticky-active');
	    $(".nav-desc").hide();
	    } 

	else 

	    {
	  	
	    mn.removeClass(mns);
	    contenido.removeClass('sticky-active');
	    $(".nav-desc").show();

	    }
	})

});







