angular.module('app').controller('tableAssController', ['$scope', function($scope) {
    $scope.title = "Welcome to SprngWiz Assignment";
    $scope.calendar1Content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

    $scope.createTable = function() {
        //	function createTable(){
        var num_rows = document.getElementById('rows').value;
        var num_cols = document.getElementById('cols').value;
        var theader = '<table class="table">\n';
        var tbody = '';

        for (var i = 0; i < num_rows; i++) {
            tbody += '<tr>';
            for (var j = 0; j < num_cols; j++) {
                tbody += '<td>';
                tbody += 'Table ' + i + ',' + j;
                tbody += '</td>'
            }
            tbody += '</tr>\n';
        }
        var tfooter = '</table>';
        document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
    }
}]);