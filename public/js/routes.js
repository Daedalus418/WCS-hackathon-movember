const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/camera', {
            templateUrl: 'views/camera.html',
            controller: 'moustacheController',
            controllerAs: 'vm'
        })
        .when('/newsletter', {
            templateUrl: 'views/newsletter.html',
            controller: 'mainController',
        })
        .when('/event', {
            templateUrl: 'views/event.html',
            controller: 'mainController',
        })
        .otherwise({
            redirectTo: '/'
        })

}
