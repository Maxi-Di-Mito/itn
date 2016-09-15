/**
 * Created by maximiliano.dimito on 5/9/2016.
 */

$(document).ready(function(){
    $('.parallax').parallax();
});

function initMap(){
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: -34.702200, lng: -58.407615},
        zoom: 16
    });
    var latLng = new google.maps.LatLng(-34.702200,-58.407615);
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}


var app = angular.module('app',[]);

app.controller("catalogController",function ($scope, $rootScope, $http)
{
    $scope.catalogo = [];
    $scope.marcas = [];

    $scope.getCatalog = function()
    {
        $http.get('/catalog').success(function(data, status) {
            $scope.catalogo = data;
            $scope.marcas = data.map(function(obj)
            {
                return obj;
            });
        });
    };

    $scope.getCatalog();

});

app.controller('emailController',function ($scope, $rootScope, $http)
{
    $scope.sendEmail = function()
    {
        console.log("Mandando mail");
        var mailData = JSON.stringify($scope.emailData);
        $http.post('/sendMail',mailData).success(function(data,status)
        {
            $scope.emailData.from = '';
            $scope.emailData.text = '';
            Materialize.toast('Su mensaje a sido enviado', 3000, 'rounded');
        }).error(function()
        {
            Materialize.toast('Hubo un error', 3000, 'rounded');
        });
    }
});