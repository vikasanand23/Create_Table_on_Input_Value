(function() {
    function navFunc($scope) {
        $scope.logoImage = "images/logo_colour.png";
        $scope.navButtons = ["Home", "Assignment", "About Us", "Springwitz Solution", "Careers", "Contact us"];
        $scope.btnActive = "Home";
        $scope.updateActive = function(navButton) {
            $scope.btnActive = navButton;
            console.log($scope.btnActive);
        };
    }
    angular.module("app").controller("navController", navFunc);
}());