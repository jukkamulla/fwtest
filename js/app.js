var fwtest = angular.module('fwtest', [
    'ngRoute',
    'fwtestControllers'
]);

fwtest.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/welcome', {
            templateUrl: './partials/welcome.html',
            controller: 'welcomeCtrl'
        }).
        when('/game', {
            templateUrl: './partials/game.html',
            controller: 'gameCtrl'
        }).
        when('/scoreboard', {
            templateUrl: './partials/scoreboard.html',
            controller: 'scoreboardCtrl'
        }).
       when('/win', {
            templateUrl: './partials/win.html',
            controller: 'winCtrl'
        }).
        when('/lose', {
            templateUrl: './partials/lose.html',
            controller: 'loseCtrl'
        }).
        otherwise({
            redirectTo: '/welcome'
        });
}]);