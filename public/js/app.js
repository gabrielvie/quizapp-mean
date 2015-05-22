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
                controller: 'RankingController',
                controllerAs: 'rankingCtrl'
            });

            $routeProvider.when('/questoes/tema/:tema_id',{
                templateUrl: 'app/views/questoes/questoes.html',
                controller: 'QuestionController',
                controllerAs: 'questionCtrl'
            });
            
            $routeProvider.when('/questoes/add',{
                templateUrl: 'app/views/questoes/add.html',
                controller: 'QuestionController',
                controllerAs: 'questionCtrl'
            });
            
            $routeProvider.otherwise('/', { redirectTo: '/'} );
        }]);
})();