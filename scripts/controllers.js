angular.module('app')

.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {


    $scope.items = [
      {path: '/menu', title: 'Menu'},
      {path: '/', title: 'SushiSan'},
    ];

    $scope.isActive = function(item) {
      if (item.path == $location.path()) {
        
        return true;
      }

        return false;
    };

  }])

.controller('CarouselCtrl', ['$scope', function($scope) {


  $scope.viewLoaded=function(){
 $('.carousel ').carousel()
}

  

  }])

.controller('homeController', function() {


  })


.controller("MainController", function(dataService){

 var vm = this;

 dataService.getData().then(function(data) {
   vm.ejemplo = data;
  });


 vm.nagiri= {
  title: "Nigiri",
  subtitle: "2 pieces per order",
  descriptions : [
  {
    producto: "Maguro" ,
    precio: 10.99
  },
  {
    producto: "Hamachi" ,
    precio:11.99
  },
  {
    producto: "Sunazuri" ,
    precio: 12.99
  },
  {
    producto: "Sake" ,
    precio:13.99
  },
  {
    producto: "Saba" ,
    precio: 14.99
  },
  {
    producto: "Ebi" ,
    precio:15.99
  },
  {
    producto: "Hotate" ,
    precio: 20.99
  },
  {
    producto: "Hirame" ,
    precio:25.99
  }] };

  vm.uramaki= {
    title: "Uramaki",
    subtitle: "inside out roll",
    descriptions : [
    {
      producto: "California" ,
      precio: 10.99
    },
    {
      producto: "Spicy Tuna" ,
      precio:11.99
    },
    {
      producto: "Eel & Cucumber" ,
      precio: 12.99
    },
    {
      producto: "Shrimp Tempura" ,
      precio:13.99
    },
    {
      producto: "Salmon" ,
      precio: 14.99
    },
    {
      producto: "San Francisco" ,
      precio:15.99
    },
    {
      producto: "Kamikaze" ,
      precio: 20.99
    },
    {
      producto: "Philadelphia" ,
      precio:25.99
    }] };

    vm.sashimi= {
      title: "Sashimi",
      subtitle: "Omakase",
      descriptions : [
      {
        producto: "Shellfish Sashimi" ,
        precio: 5.99
      },
      {
        producto: "Albacore Tataki" ,
        precio:10.99
      },
      {
        producto: "Katsuo Tataki" ,
        precio: 20.99
      },
      {
        producto: "Hirame" ,
        precio:30.99
      },
      {
        producto: "Aji" ,
        precio: 5.99
      },
      {
        producto: "Fish selections" ,
        precio:5.99
      },
      {
        producto: "Shellfish Sashimi" ,
        precio: 5.99
      },
      {
        producto: "Albacore Tataki" ,
        precio:10.99
      }] };

      vm.hosomaki= {
        title: "Hosomaki",
        subtitle: "with seaweed outside",
        descriptions : [
        {
          producto: "Shellfish Sashimi" ,
          precio: 5.99
        },
        {
          producto: "Albacore Tataki" ,
          precio:10.99
        },
        {
          producto: "Katsuo Tataki" ,
          precio: 20.99
        },
        {
          producto: "Hirame" ,
          precio:30.99
        },
        {
          producto: "Aji" ,
          precio: 5.99
        },
        {
          producto: "Fish selections" ,
          precio:5.99
        },
        {
          producto: "Shellfish Sashimi" ,
          precio: 5.99
        },
        {
          producto: "Albacore Tataki" ,
          precio:10.99
        }] };

        vm.specialty= {
        title: "Specialty Rolls",
        subtitle: "inside out roll (8 pieces per order)",
        descriptions : [
        {
          producto: "Rainbow Roll" ,
          precio: 10.99 ,
          detalle: "salmon, tuna, yellowtail, mock crabmeat, avocado, cucumber, asparagus & tobiko"
        },
        {
          producto: "Crazy Roll" ,
          precio: 11.99,
          detalle: "crunch spicy tuna, avocado & asparagus inside, topped w. eel & red tobiko"
        },
        {
          producto: "Valentine Roll" ,
          precio: 14.99,
          detalle: "shrimp tempura & eel jalapeno inside, tuna, avocado & spicy mayo on top"
        },
        {
          producto: "Pink Trio" ,
          precio: 17.99,
          detalle: "tuna, salmon, yellowtail, avocado wrapped in pink soy paper with green tobiko on top "
        },
        {
          producto: "Aru Roll" ,
          precio: 20.99,
          detalle: "spicy tuna, cucumber, flying fish roe & scallion with smoked salmon on the top"
        },
        {
          producto: "Bomb Roll" ,
          precio: 25.99,
          detalle: "thinly sliced cucumber wrapped with shrimp tempura, avocado kani & spicy sauce (no rice)"
        },
        {
          producto: "Dragon Roll" ,
          precio: 11.99,
          detalle: "crunch spicy tuna, avocado & asparagus inside, topped w. eel & red tobiko "
        },
        {
          producto: "Crunchy Spicy Tuna" ,
          precio: 15.99,
          detalle: "spicy tuna, cucumber, flying fish roe & scallion with smoked salmon on the top"
        }
        ]

      };

        vm.kitchen= {
        title: "From the Kitchen",
        subtitle: "served with miso soup, rice and salad",
        descriptions : [
        {
          producto: "Miso Cod" ,
          precio: 17.99 ,
          detalle: "a sweet and silky fish, marinated for days in sake and miso, cooked to perfection and served with baby bok choy and soy roasted potatoes"
        },
        {
          producto: "Sesame Crusted Tuna" ,
          precio: 20.99,
          detalle: "with tempura mixed vegetables and chili miso sauce"
        },
        {
          producto: "Chicken Teriyaki" ,
          precio: 22.99,
          detalle: "grilled free range chicken teriyaki with sesame vegetable noodle salad"
        },
        {
          producto: "Kung Pao Chicken" ,
          precio: 25.99,
          detalle: "this spicy traditional Chinese dish is made with peanuts and chili peppers, and a our chef adds a touch of cilantro for even more 'pao' "
        },
        {
          producto: "Roasted Peking Duck" ,
          precio: 22.00,
          detalle: "with cucumber, scallions, pineapple hoisin"
        }
        ]

      };


      });