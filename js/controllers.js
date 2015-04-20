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
    'gamestate',
    '$location',
    function ($scope, gamestate, $location) {
        $scope.game = 'GAME';
        $scope.state = gamestate;

        $scope.lose = function () {
            $location.path( '/lose' );
        };

        $scope.win = function () {
            gamestate.levelUp();
            $location.path( '/win' );
        };

        $scope.home = function () {
            $location.path( '/home' );
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