// Routes

storyApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/story', {
        templateUrl: 'pages/story.html',
        controller: 'storyController'
    })
    .when('/play', {
        templateUrl: 'pages/playback.html',
        controller: 'playController'
    });
});
