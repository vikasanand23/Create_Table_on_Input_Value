(function() {
    angular.module("app", ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/Home", {
                    controller: "homeController",
                    templateUrl: "com/view/home.html"
                })
                .when("/Assignment", {
                    controller: "tableAssController",
                    templateUrl: "com/view/tableAssignment.html"
                })
				.when("/About Us", {
                    controller: "underConstController",
                    templateUrl: "com/view/underConstruction.html"
                })
				.when("/Springwitz Solution", {
                    controller: "underConstController",
                    templateUrl: "com/view/underConstruction.html"
                })
				.when("/Careers", {
                    controller: "underConstController",
                    templateUrl: "com/view/underConstruction.html"
                })
				.when("/Contact us", {
                    controller: "underConstController",
                    templateUrl: "com/view/underConstruction.html"
                })
				.otherwise({redirectTo: '/Home'});

        });
}());