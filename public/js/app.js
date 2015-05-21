(function() {
    'use strict';
    
    angular
        .module('quizerApp',
            ['ngRoute',
            'ngStorage',
            'ngResource']
        )
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/',{
                templateUrl: 'app/views/home.html',
                controller: 'QuestionController',
                controllerAs: 'questionCtrl'
            });

            $routeProvider.when('/:tema_id',{
                templateUrl: 'app/views/home.html',
                controller: 'QuestionController',
                controllerAs: 'questionCtrl'
            });
            
            $routeProvider.when('/add/questao',{
                templateUrl: 'app/views/questaoAdd.html',
                controller: 'QuestionController',
                controllerAs: 'questionCtrl'
            });
            
            $routeProvider.otherwise('/', { redirectTo: '/'} );
        }]);
})();