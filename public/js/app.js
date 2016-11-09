angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .config(routes)
        ;
