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
        $scope.scoreboard = function ( path ) {
            $location.path( path );
        };
    }
]);

fwtestControllers.controller('scoreboardCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.score = 16;

        $scope.home = function ( path ) {
            $location.path( path );
        };
    }
]);
/*
fwtestControllers.controller('winCtrl', [
    '$scope',
    'gamestate',
    '$location',
    function ($scope, gamestate, $location) {
        $scope.state = gamestate;
        $scope.back = function () {
            $location.path( '/game' );
        };
    }
]);

fwtestControllers.controller('loseCtrl', [
    '$scope',
    'gamestate',
    '$location',
    function ($scope, gamestate, $location) {
        $scope.state = gamestate;
        $scope.back = function () {
            $location.path( '/game' );
        };
    }
]); */