angular.module("app") 
.factory("dataService", function($http) {
	return {
		getData: function() {

			
			var promise = $http({

				method: "GET",
				url: "https://sheetsu.com/apis/v1.0/e597ba54"
			})
			.then(function (response) {
				return (response.data);
			});
			return promise;

		}


	};


});
/*
.factory("filterService", function() {
	return
	{
		byField: function(){
			var filtered = [];
			for (var i = 0;  i < items.length; i++) {
				var item = items[i];
				if("bebidas" == item.Nombre){
					filtered.push(item);
				};
				};
				return filtered;



			}
		}


	});
*/