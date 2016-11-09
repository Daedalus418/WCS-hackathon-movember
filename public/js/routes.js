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
        .otherwise({
            redirectTo: '/'
        })

}
