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


})

/*
.factory('customPrices', function () {

            var getPrice = function(producto)
            {
               var precios = [];
			var precio4= producto.Precio_4 ;
			if(precio4 != "") {
				precios.push(precio4);
				};
			var precio6= producto.Precio_6 ;
			if(precio6 != "") {
				precios.push(precio6);
				};
			var precio8= producto.Precio_8 ;
			if(precio8 != "") {
				precios.push(precio8);
				};
			var precio9= producto.Precio_9 ;
			if(precio9 != "") {
				precios.push(precio9);
				};
			var precio10= producto.Precio_10 ;
			if(precio10 != "") {
				precios.push(precio10);
            };
            return precios;
        }

            return {
                getPrice : getPrice
            };
})

.factory('someCustomPrices', function (customPrices) {

            var getSomePrices = function(productos)
            {
            	angular.forEach(productos, function(producto, key){
            		producto.Precios = customPrices.getPrice(producto);

            	} );

            return productos;
        }

            return {
                getSomePrices : getSomePrices
            };
});

*/



