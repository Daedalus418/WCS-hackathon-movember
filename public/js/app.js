angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('moustacheService', moustacheService)
        .controller('mainController', mainController)
        .controller('moustacheController', moustacheController)
        .controller('navbarController', navbarController)
        .config(routes)
        ;
