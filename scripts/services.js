angular.module("app")
.factory("dataService", function($http)
{
	var promise = null;

	return function()
	{
		if (promise) {
			return promise;
		}
		else{
			promise = $http
			({

				method: "GET",
				url: "https://sheetsu.com/apis/v1.0/e597ba54"
			})
			.then(function (response)
			{
				return (response.data);
			});
			return promise;
		}
	}
});
