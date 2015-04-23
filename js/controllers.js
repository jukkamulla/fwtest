var fwtestControllers = angular.module('fwtestControllers', []);

fwtestControllers.controller('welcomeCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.name = 'Muci';
        $scope.user = {name: "Muci", age: 18, gender: "male"};
        $scope.play = function ( path ) {
            console.log('go to play');
            $location.path( path );
        };
    }
]);

fwtestControllers.controller('gameCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.redirect = function ( path ) {
            $location.path( path );
        };
    }
]);

fwtestControllers.controller('scoreboardCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.score = 16;

        $scope.redirect = function ( path ) {
            $location.path( path );
        };
    }
]);

fwtestControllers.controller('winCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.win = function ( path ) {
            $location.path( path );
        };
    }
]);

fwtestControllers.controller('loseCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.lose = function ( path ) {
            $location.path( path );
        };
    }
]);