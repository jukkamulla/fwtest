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

        $scope.home = function () {
            $location.path( '/home' );
        };
    }
]);

fwtestControllers.controller('scoreboardCtrl', [
    '$scope',
    '$location',
    function ($scope, $location) {
        $scope.score = 16;
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